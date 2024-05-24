<template>
    <div class="col-md-12 mb-4" v-for="event in events" :key="event.id">
        <div class="card">
            <div class="row">
                <div class="col-md-4">
                    <img :src='event.photo' class="card-img img-fluid">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ event.title }}</h5>
                        <p class="card-text">{{ event.description }}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import { ref } from 'vue';
const events = ref(null);
//fetch('http://localhost:8080/api/v1/events')
//    .then(response => response.json())
//    .then(data => events.value = data);

//console.log(events.titulo_imagen);

const getEvents = async () => {

    try {
        const response = await fetch(`http://localhost:8080/api/v1/events`, {
            method: 'GET'
        });
        console.log("Obteniendo lista de nombre eventos: ", response)
        events.value = await response.json();
        console.log("Respuesta: ", events.value)


    } catch (error) {
        console.log("Error exception: ", error.message)

    }
}

//llamando a categorias 
getEvents();


</script>
