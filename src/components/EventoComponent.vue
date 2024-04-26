<template>
      <div class="col-md-12 mb-4" v-for="event in events" :key="event.id">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-4">
                              <img :src='event.imagen' class="card-img img-fluid" alt={{event.titulo_imagen}}>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{event.titulo_imagen}}</h5>
                                    <p class="card-text">{{event.descripcion_breve}}</p>
                                    <div class="valoracion">valoracion</div>
                                    <a href="#" class="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</template>


<script setup>
import { ref } from 'vue';
const events = ref({});
fetch('https://ic2o8act3c.execute-api.us-east-1.amazonaws.com/pagina-de-inicio-eventos/pagina-de-inicio-eventos')
    .then(response => response.json())
    .then(data => events.value = data);

//console.log(events.titulo_imagen);
</script>

