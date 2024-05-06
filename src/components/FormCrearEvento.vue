<template>

   <div class="container">

      <div class="row  d-flex justify-content-center">
         <h1>Crear eventos</h1>
         <form action="">
            <div class="mb-3 col-12 col-md-8 col-xl-8  ">
               <label for="tituloEvent" class="form-label">Título:</label>
               <input type="text" class="form-control" id="tituloEvent">
            </div>
            <div class="mb-3 col-12 col-md-8 col-xl-8">
               <label for="descripcionEvent" class="form-label">Descripción:</label>
               <textarea type="text-area" class="form-control" id="descripcionEvent" />
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
               <label for="eventPrice" class="form-label">Precio:</label>
               <input type="email" class="form-control" id="eventPrice">

            </div>
            <div class="mb-3 col-12 col-md-8 col-xl-8">
               <label for="exampleInputPassword1" class="form-label">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check ">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
               <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
         </form>


      </div>
   </div>

</template>

<script setup>


</script>

<style scoped></style>