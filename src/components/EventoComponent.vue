<template>
  <div class="col-md-12 mb-4" v-for="event in events" :key="event.id">
    <div class="card">
      <div class="row">
        <div class="col-md-4">
          <img :src='event.photo' class="card-img img-fluid">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-uppercase">{{ event.title }}</h5>
            <p class="card-text">{{ event.description }}</p>
            <!--  <a href="#" class="btn btn-primary">Ver más</a>-->
            <router-link :to="'/detailEvento/' + event.id" class="btn btn-primary">Ver más</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
const events = ref(null);
fetch('http://localhost:8080/api/v1/events')
  .then(response => response.json())
  .then(data => events.value = data);

//console.log(events.titulo_imagen);
</script>
<style scoped></style>
