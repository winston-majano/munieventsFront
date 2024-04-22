<script setup>
import EventoComponent from '@/components/EventoComponent.vue'
import NewsComponent from '@/components/NewsComponent.vue'
</script>

<template>
  <h1>Contenido de la vista principal</h1>
 
<div class="container">
  <div class="row">
    <div class="col-8">
       <EventoComponent/>
    </div>
    <div class="col-4">
      <NewsComponent/>
    </div>
  </div>
</div>


</template>
