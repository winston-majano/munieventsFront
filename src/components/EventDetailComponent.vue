<template>
    <div class="col-md-12 mb-4" v-if="events">
      <div class="card h-100">
        <img :src="events.photo" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ events.title }}</h5>
          <p class="card-text">{{ events.description }}</p>
          <p class="card-text_start">Fecha inicio: {{ events.start_date }}</p>
          <p class="card-text_end">Fecha final: {{ events.end_date }}</p>
          <p class="card-text">Ubicación: {{ events.location }}</p>
          <p class="card-text">Precio: {{ events.price }} €</p>
          <p class="card-text">Valoración: {{ events.coins }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const events = ref([]);
  const eventId = ref(route.params.id);
  const event = ref(null);
  
  fetch(`http://localhost:8080/api/v1/events/${eventId.value}`)
    .then(response => response.json())
    .then(data => {
      events.value = data;
      console.log("lista evento id" ,data);
      event.value = events.value.find(evento => evento.id === eventId.value);
    })
  </script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 100%;
}

.card-title,
h5 {
    display: grid;
    place-items: center;
}

p {
    display: flex;
    justify-content: space-around;
    margin-top: 0;
    margin-bottom: 1rem;
    gap: 2px;
}
</style>
