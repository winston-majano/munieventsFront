<template>
    <div class="container">


        <h1>Mis Eventos</h1>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-8">
                <ol v-for="event in eventsData" :key="event.id" class="list-group">
                    <li class="list-group-item text-primary text-uppercase">{{ event }}</li>
                </ol>
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

<style scoped></style>