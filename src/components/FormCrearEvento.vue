<template>

   <div class="container">

      <div class="row  d-flex justify-content-center">
         
         <div class="row center">
            <h1>Formulario Creacion de Eventos</h1>
         </div>
         <form action="">
            <div class="row">
               <div class="col-12 col-md-12  collg-12 col-xl-8">
                  <img
                     src="https://eikonos.com/wp-content/webp-express/webp-images/uploads/2019/11/G2J_Eikonos_nov2019_consejos_diseno_para_eventos.jpg.webp"
                     alt="" srcset="">
               </div>

            </div>


            <div class="mb-3 col-12 col-md-8 col-xl-8  ">
               <label for="tituloEvent" class="form-label">Título:</label>
               <input type="text" class="form-control" id="tituloEvent">
            </div>
            <div class="mb-3 col-12 col-md-8 col-xl-8">
               <label for="descripcionEvent" class="form-label">Descripción:</label>
               <textarea type="text-area" cols="40" rows="5" class="form-control" id="descripcionEvent" />
            </div>

            <div class="mb-3 col-12 col-md-8 col-xl-8">
               <div class="row">
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Inicio:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent" />
                  </div>
                  <div class="col-6">
                     <label for="descripcionEvent" class="form-label">Fecha Fin:</label>
                     <input type="datetime-local" class="form-control" id="descripcionEvent" />
                  </div>
               </div>
            </div>

            <div class="mb-3 col-12 col-md-8 col-lg-8">
               <div class="row">
                  <div class="col-2"> <label for="eventPrice" class="form-label">Precio:</label></div>
                  <div class="col-10"> <input type="number" min="0" max="10000" class="form-control" id="eventPrice">
                  </div>
               </div>

            </div>
            <div class="col-12 mb-3 col-lg-8">
               <select class="form-select form-select-lg mb-3">
                  <option selected>Seleccione una Categoria</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
               </select>
               <!--<span>Seleccionado: {{ selected }}</span> -->
            </div>
            <div class="mb-3 form-check ">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
                 <a href="#"> <label class="form-check-label" for="exampleCheck1">Aceptar Terminos y condiciones para crear eventos</label></a>
            </div>
            <button type="submit" class="btn btn-primary btn-lg mb-3">Crear Evento</button>
         </form>
      </div>
   </div>

</template>

<script>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {


   setup() {

      const imageEvent = ref(null);
      const selected = ref(null);
      const router = useRouter();

      //objeto evento
      const event = ref({
         title: '',
         description: '',
         start_date: '',
         aliasend_date: '',
         location: '',
         price: 0,
         coins: 0,
         creation_date: '',
         category_id: 1,
         user_id: 1,
         photo: ''
      });
      const message = ref('');
      // const errorMessage = ref('');


      // Crear un nuevo evento 
      const saveEvent = async () => {
         const eventData = JSON.stringify(event.value);
         try {
            const response = await fetch('http://localhost:8080/api/v1/events', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: eventData
            });

            const data = await response.json();

            if (response.status === 200) {
               message.value = 'Evento creado correctamente.';
               router.push("/misEventos")

            } else {
               message.value = 'Error al crear evento: ' + data.message;
            }
         } catch (error) {
            message.value = 'Error al crear el evento: ' + error.message;
         }
      }

      return {
         event,
         saveEvent,
         message,
         selected

      };

   }
};



</script>

<style scoped></style>