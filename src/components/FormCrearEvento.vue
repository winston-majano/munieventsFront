<template>

   <div class="container">

      <div class="row  d-flex ">
         <div class="col-12">
            <h1>Formulario de creación de Eventos</h1>
         </div>

         <form action="" @submit.prevent="createEvent" enctype="multipart/form-data">

            <div class="col-12 col-md-12 col-lg-8  form-group my-5 text-center">
               <img id="imgEvent" :src="imageEvent" class="img-fluid rounded">
               <input type="file" id="imageEvent" @change="obtenerImagen" class="form-control-file">
               <label for="imageEvent" class="btn btn-outline-info btn-lg btn-block    mt-1">Subir foto </label>
            </div>

            <div class="form-group  mb-3 col-12 col-md-12 col-lg-8">
               <label for="tituloEvent" class="form-label">Título:</label>
               <input type="text" class="form-control" id="tituloEvent" v-model="event.title">
            </div>


            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <label for="descripcionEvent" class="form-label">Descripción:</label>
               <textarea type="text-area" cols="40" rows="5" class="form-control" id="descripcionEvent"
                  v-model="event.description" />
            </div>

            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <div class="row">
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Inicio:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent"
                        v-model="event.start_date" />
                  </div>
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Fin:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent" v-model="event.end_date" />
                  </div>
               </div>
            </div>
            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <label for="locationEvent" class="form-label">Direccion:</label>
               <input type="text" class="form-control" id="locationEvent"
                  v-model="event.location" />
            </div>

            <div class=" form-group mb-3 col-12 col-md-8 col-lg-8">
               <div class="row">
                  <div class="col-3"> 
                     <label for="eventPrice" class="form-label">Precio:</label>
                  </div>
                  <div class="col-9"> <input type="number" min="0" max="10000" class="form-control" id="eventPrice"
                        v-model="event.price">
                  </div>
               </div>

            </div>
            <div class=" form-group col-12 mb-3 col-lg-8 mb-5">
               <label for="">Categoria: </label>
               <select v-model="selected"    id="category" class="form-control">
                  <option :value="null" disabled>Select a category</option>
                  <option v-for="category in selectData" :key="category.id" v-bind:value="category.id">
                     {{ category.description }}
                  </option>
               </select>
             <!--  <span>ha seleccionado: {{ selected }}</span> -->
            </div>
         <!--   <div class=" form-group mb-3 form-check ">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
               <a href="#"> <label class="form-check-label" for="exampleCheck1">Aceptar Terminos y condiciones para
                     crear eventos</label></a>
            </div>-->
            <button type="submit" class=" form-group btn btn-primary btn-lg mb-3">Crear Evento</button>
            <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
               {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
               {{ errorMessage }}
            </div>

         </form>
      </div>
   </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useIsLoggedStore } from '@/stores/isLogged';

const isLoggedStore = useIsLoggedStore();
const router = useRouter();
const imageEvent = ref('');
const selected = ref(null);
const selectData = ref('');

//obtener la fecha 
let now = new Date();

//objeto evento
const event = ref({
   title: '',
   description: '',
   start_date: '',
   end_date: '',
   location: '',
   price: 0,
   coins: 100,
   creation_date: now.toISOString(),
   category_id: selected,
   user_id: isLoggedStore.user.id,
   photo: ''
});
const successMessage = ref('');
const errorMessage = ref('');


function obtenerImagen(e) {
   const file = e.target.files[0];
   //console.log(file);
   cargarImagen(file);
}

function cargarImagen(file) {
   const reader = new FileReader();
   reader.onload = (e) => {
      imageEvent.value = e.target.result;
      event.value.photo = e.target.result;
      //console.log(e.target.result);
   }
   reader.readAsDataURL(file);
}

// Esta funcion trae todas las categorias para mostrarlos en el control select
const getCategory = async () => {

   try {
      const response = await fetch('http://localhost:8080/api/v1/category', {
         method: 'GET'
      });
     // console.log("Obteniendo la categoria: ", response)
      selectData.value = await response.json();
      //console.log("Respuesta: ", selectData)


   } catch (error) {
      console.log("Error exception: ", error.message)

   }
}

//llamando a categorias 
getCategory();



// Crear un nuevo evento 
const createEvent = async () => {
   //console.log(event.value)
   const eventData = JSON.stringify(event.value);
   //console.log("DATA:",eventData)
   try {
      const response = await fetch('http://localhost:8080/api/v1/events', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',

         },
         body: eventData
      });
      // console.log("Respuesta antes de parseo JSON: ", response)
      const data = await response.text();
      //console.log("Respuesta: ", data)

      if (response.ok) {
         successMessage.value = 'Evento creado correctamente.';

         router.push("/misEventos");
      } else {
        // console.log("error del data: ", data.message);
         errorMessage.value = `Error al crear el evento: ${data.message}`;
      }
   } catch (error) {
     // console.log("Error exception: ", error.message)
      errorMessage.value = `Error al crear el evento: ${error.message}`;
   }
}



</script>

<style scoped>
#imageEvent {
   display: none;
}
</style>