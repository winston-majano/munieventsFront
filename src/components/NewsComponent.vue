<template>

    <div class="container noticia-container">
        <!-- Descripción de la noticia -->
        <div class="noticia-description">

            <!-- <img src="img/evento1.webp" alt="Imagen Noticia 1" class="img-fluid"> -->

            <p class="image-caption"><span id="fotografo"></span></p>
            <h2 class="text-center noticia-title" id="titulo"></h2>



            <p id="contenido"></p>
        </div>
    </div>

</template>

<script setup>
 
    // URL de tu API
    const apiUrl = 'https://s8egzniilh.execute-api.us-east-1.amazonaws.com/noticia_barcelona/';

    // Realizar la solicitud utilizando fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Actualizar el contenido de la página con los datos obtenidos
        // document.querySelector('.noticia-container img').src = data.imagen;
        document.querySelector('#fotografo').textContent = `Foto de ${data.nombreFotografo}`;
        document.querySelector('#titulo').textContent = data.titulo;

        // Estilizar la redacción
        const contenidoElement = document.querySelector('#contenido');
        contenidoElement.textContent = data.noticia_redaccion;
        contenidoElement.style.textAlign = 'justify'; // Alineación justificada
        contenidoElement.style.lineHeight = '1.9'; // Altura de línea

        // Resto del código (si es necesario)
      })
      .catch(error => console.error('Error al obtener datos:', error));

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
