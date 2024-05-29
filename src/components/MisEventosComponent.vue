<template>
    <div class="container">
        <p1 class="mb-5 fs-1 txt text-primary">Mis Eventos creados</p1>

           
                <div class="row my-2" v-for="event in eventsData" :key="event.id">
                    <div class="col-md-1">
                        <img :src="event.photo" class="card-img img-fluid rounded" />
                    </div>
                    <div class="col-md-7">
                            <p class="fs-3 text-uppercase">{{ event.title }}</p>
                           
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-warning mx-2">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
    






</template>

<script setup>
import { ref } from 'vue';
import { useIsLoggedStore } from '@/stores/isLogged';

/// comentario de prueba 

const isLoggedStore = useIsLoggedStore();
const eventsData = ref('');
const id = isLoggedStore.user.id;
// Esta funcion trae todas las categorias para mostrarlos en el control select
const getMyEvents = async () => {

    try {
        const response = await fetch(`http://localhost:8080/api/v1/events/user/${id}`, {
            method: 'GET'
        });
        console.log("Obteniendo lista de nombre eventos: ", response)
        eventsData.value = await response.json();
        console.log("Respuesta: ", eventsData.value)


    } catch (error) {
        console.log("Error exception: ", error.message)

    }
}

//llamando a categorias 
getMyEvents();

</script>

<style scoped>
</style>