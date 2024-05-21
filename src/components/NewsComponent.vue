<template>

    <div class="container">
    <div class="row"  v-for="new1 in news" :key="new1.id">
        <div class="col-12">
              <img :src='new1.image_new' alt="Imagen Noticia 1" class="img-fluid">
              <h2 class="text-center noticia-title" id="titulo">{{ new1.title }}</h2> 
             <p> {{ new1.description }}</p> 
        </div>
        </div>
       
    </div>

</template>

<script setup>

import { ref } from 'vue';

const news = ref({});

//news.value = {titulo: "123456",  noticia_redaccion : "kkahsldhlakshdjabskcjbskjañcbñkshjdbvckajsbcvk.dsjcbvsajdbv-ksdnv-lkSDNVLKJsdbvk.SJDBV.Kdsjbvk.b"}

fetch('http://localhost:8080/api/v1/news')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        news.value = data
        console.log(data);
    });

   
</script>

<style scoped>
.noticia-container {
    margin-top: 20px;
}

.noticia-title {
    color: #007bff;
}

.noticia-description p {
    text-align: justify;
    line-height: 1.6;
}

.noticia-highlights {
    margin-top: 20px;
}

.noticia-highlights h3 {
    color: #007bff;
}

.noticia-highlights ul {
    list-style-type: none;
    padding: 0;
}

.noticia-highlights li {
    margin-bottom: 10px;
    margin-left: 20px;
    font-style: italic;
}


.noticia-description {
    max-width: 1024px;
    margin: auto;
}
</style>
