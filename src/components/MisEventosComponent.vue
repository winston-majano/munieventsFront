<template>
    <div class="container">
        <h1>Mis Eventos creados</h1>
        <div class="row">



            <div class="card mb-3" v-for="event in eventsData" :key="event.id">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="event.photo" class="card-img img-fluid rounded"  />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ event.title }}</h5>
                        </div>
                        <button type="button" class="btn btn-warning mx-2">Editar</button>
                        <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
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
img{
    width: 200px;
    height: auto;
}


</style>