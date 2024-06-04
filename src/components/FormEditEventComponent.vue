<template>
   <div class="container">

      <div class="row  d-flex ">
         <div class="col-12">
            <h1>Formulario de Edicion de eventos</h1>
         </div>

         <!-- -->
         <form action="" @submit.prevent="editEvent" enctype="multipart/form-data">

            <div class="col-12 col-md-12 col-lg-8  form-group my-5 text-center">
               <img id="imgEvent" v-if="events.photo" :src="events.photo" class="img-fluid rounded">
               <img id="imgEvent" v-else-if="imageEvent" @change:src="imageEvent" class="img-fluid rounded">
               <input type="file" id="imageEvent" @change="obtenerImagen" class="form-control-file">
               <label for="imageEvent" class="btn btn-outline-info btn-lg btn-block    mt-1">Subir foto </label>
            </div>

            <div class="form-group  mb-3 col-12 col-md-12 col-lg-8">
               <label for="tituloEvent" class="form-label">Título:</label>
               <input type="text" class="form-control" id="tituloEvent" v-model="events.title">
            </div>


            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <label for="descripcionEvent" class="form-label">Descripción:</label>
               <textarea type="text-area" cols="40" rows="5" class="form-control" id="descripcionEvent"
                  v-model="events.description" />
            </div>

            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <div class="row">
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Inicio:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent"
                        v-model="events.start_date" />
                  </div>
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Fin:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent"
                        v-model="events.end_date" />
                  </div>
               </div>
            </div>
            <div class=" form-group mb-3 col-12 col-md-8 col-xl-8">
               <label for="locationEvent" class="form-label">Direccion:</label>
               <input type="text" class="form-control" id="locationEvent" v-model="events.description" />
            </div>

            <div class=" form-group mb-3 col-12 col-md-8 col-lg-8">
               <div class="row">
                  <div class="col-3">
                     <label for="eventPrice" class="form-label">Precio:</label>
                  </div>
                  <div class="col-9"> <input type="number" min="0" max="10000" class="form-control" id="eventPrice"
                        v-model="events.price">
                  </div>
               </div>

            </div>
            <div class=" form-group col-12 mb-3 col-lg-8 mb-5">
               <label for="">Categoria: </label>
               <select v-model="selected" id="category" class="form-control">
                  <option :value="null" disabled>Select a category</option>
                  <option v-for="category in selectData" :key="category.id" v-bind:value="category.id">
                     {{ category.description }}
                  </option>
               </select>

            </div>

            <button type="submit" class=" form-group btn btn-primary btn-lg mb-3">Modificar Evento</button>

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
import { useRoute } from 'vue-router';

const router = useRoute();
const events = ref([]);

const imageEvent = ref('');
const selected = ref(null);
const selectData = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const eventId = ref(router.params.id);
let categoryId = ref('');
let usuario = ref('');


//console.log("El parametro que viene es: ", eventId.value);

fetch(`http://localhost:8080/api/v1/events/${eventId.value}`)
   .then(response => response.json())
   .then(data => {
      events.value = data;
      categoryId.value = events.value.category_id;
   //   console.log("Categoria: ", categoryId.value);
    //  console.log("lista evento id", data);
      usuario.value = events.value.user_id;

  //    console.log("El usuario es: ", usuario.value);
  //    console.log("El usuario que envio es : ", events.value.user_id)

      
   })


const getCategory = async () => {

   try {
      const response = await fetch('http://localhost:8080/api/v1/category', {
         method: 'GET'
      });

      selectData.value = await response.json();


   } catch (error) {
      console.log("Error exception: ", error.message)

   }
}

//llamando a categorias 
getCategory();




function obtenerImagen(e) {
   const file = e.target.files[0];
   //console.log(file);
   cargarImagen(file);
}

function cargarImagen(file) {
   const reader = new FileReader();
   reader.onload = (e) => {
      imageEvent.value = e.target.result;
      events.value.photo = e.target.result;
      //console.log(e.target.result);
   }
   reader.readAsDataURL(file);
}

//console.log("El titulo del evento es: ", events.value.title)

// editar un  evento 
const editEvent = async () => {


   const eventData = JSON.stringify(events.value);
   console.log("La data que envio es: ", eventData)
   try {
      const response = await fetch(`http://localhost:8080/api/v1/events/${eventId.value}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',

         },
         body: eventData
      });
      // console.log("Respuesta antes de parseo JSON: ", response)
      const data = await response.text();
     // console.log("Respuesta: ", data)

      if (response.ok) {
         successMessage.value = 'Evento modificado correctamente.';
        
      } else {
         // console.log("error del data: ", data.message);
         errorMessage.value = `Error al modificar el evento: ${data.message}`;
      }
   } catch (error) {
      // console.log("Error exception: ", error.message)
      errorMessage.value = `Error al modificar el evento: ${error.message}`;
   }
}


</script>

<style scoped>
#imageEvent {
   display: none;
}
</style>