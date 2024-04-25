<template>
    <div class="container noticia-container"> 
        <div class="noticia-description"> 

              <img :src='news.imagen' alt="Imagen Noticia 1" class="img-fluid"> 
             <h2 class="text-center noticia-title" id="titulo">{{ news.titulo }}</h2> 
             <p class="image-caption"><span id="fotografo"></span> {{ news.noticia_redaccion }}</p> 
            
            <p id="contenido"></p>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';

const news = ref({});

//news.value = {titulo: "123456",  noticia_redaccion : "kkahsldhlakshdjabskcjbskjañcbñkshjdbvckajsbcvk.dsjcbvsajdbv-ksdnv-lkSDNVLKJsdbvk.SJDBV.Kdsjbvk.b"}

fetch('https://s8egzniilh.execute-api.us-east-1.amazonaws.com/noticia_barcelona')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        news.value = data
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

.footer {
    margin-top: 50px;
}

.footer-title-01 {
    color: #007bff;
}

.footer-link-01 a {
    color: #ffffff;
    text-decoration: none;
}

.footer-link-01 a:hover {
    text-decoration: underline;
}

.footer-bottom {
    margin-top: 20px;
}

.social-icons i {
    font-size: 20px;
    margin-right: 10px;
    color: #ffffff;
}

.noticia-description {
    max-width: 1024px;
    margin: auto;
}
</style>
