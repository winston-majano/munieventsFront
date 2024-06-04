<template>
  <div class="col-md-12 mb-4" v-if="events">
    <div class="card">
      <h5 class="card-title">{{ events.title }}</h5>
      <img :src="events.photo" class="card-img-top">
      <div class="fecha">
        <p class="card-text_start">Fecha inicio: <br>{{ formatDateTime(events.start_date) }}</p>
        <p class="card-text_end">Fecha final: <br>{{ formatDateTime(events.end_date) }}</p>
      </div>
      <div class="card-body">
        <p class="card-text">{{ events.description }}</p>
        <div class="desc">
          <p class="card-text-ub"> <img src="../img/icons--location.png" class="icono-location"> {{ events.location }}</p>
          <p class="card-text-pre">Precio: {{ events.price }} €</p>
        </div>
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

const formatDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', 
                  hour: '2-digit', minute: '2-digit', hour12: false };
  return dateTime.toLocaleDateString('es-ES', options);
};

fetch(`http://localhost:8080/api/v1/events/${eventId.value}`)
  .then(response => response.json())
  .then(data => {
    events.value = data;
<<<<<<< HEAD
    console.log("Obteniendo evento por id desde detalle de eventos", data);
    event.value = events.value.find(evento => evento.id === eventId.value);
  })
=======
    console.log("lista evento id", data);
  });

>>>>>>> detailEvent
</script>

<style scoped>
.card-img-top {
  width: 60%;
  height: 50%;
  display: grid;
  place-content: center;
  margin-left: 19%;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 2px 5px;
  color: #5fdfe8;
}

.fecha {
  display: flex;
  justify-content: space-around;
  margin-top: 9px;
}


h5 {
  display: grid;
  place-items: center;
  margin-top: 15px;
  color:#555553 ;
}

.desc{
  display: flex;
  justify-content: space-between;
}
.card-text-ub{
color: rgb(136, 7, 9);
font-size: 24px;
}
.card-text-pre{
  color: rgb(54, 54, 167);
  font: 1em sans-serif;
  font-style: 24px;
}


p {
  display: flex;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 1rem;
  gap: 2px;
  font-family: monospace;
}

@media only screen and (max-width:480px) {
    .card{
      display: block;
      width: 100%;
      height: auto;
    }
    .fecha {
      display: flex;
      justify-content: space-around;
      gap: 5px;
      margin-left: 40px;
    }
   
    .desc {
      display: flex;
      justify-content: space-around;
      gap: 10px;
    }

}

</style>
