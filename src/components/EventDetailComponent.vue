<template>
    <div class="col-md-12 mb-4" v-for="event in events" :key="event.id">
        <div class="card h-100">
            <img :src='event.photo' class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ event.title }} </h5>
                <p class="card-text">{{ event.description }}</p>
                <p class="card-text_start">Fecha inicio: {{ event.start_date }}</p>
                <p class="card-text_end">Fecha final: {{ event.end_date }}</p>
                <p class="card-text">Ubication: {{ event.location }}</p>
                <p class="card-text">Precio: {{ event.price }} €</p>
                <p class="card-text">Valoracion: {{ event.coins }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const events = ref([]);;
const evento = ref([]);

fetch('http://localhost:8080/api/v1/events')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        events.value = data;
        evento.value = data.find(event => event.id === 'id');
        console.log(evento.value);
        // if (evento.value) {
        //     events.value = [0];
        // }
    });
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

#start,
p {
    display: flex;
    justify-content: space-around;
    margin-top: 0;
    margin-bottom: 1rem;
    gap: 2px;
}
</style>
