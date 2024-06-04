<template>
  <div class="container">
    <div class="row news-section">
      <div class="col-12" v-for="(new1, index) in orderedNews" :key="new1.id">
        <a :href="'/noticias?id=' + new1.id" class="text-decoration-none text-dark">
           <!-- Si estamos viendo la página de noticias y es la primera noticia, añade un estilo distinto que le hemos llamado first-news-card.
Si estamos en la página de inicio, añade otro estilo al que hemos llamado homepage-news-card. --> 
          <div :class="['card mb-4 shadow-card', {'first-news-card': currentPage === '/noticias' && index === 0, 'homepage-news-card': paginaInicio}]">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center" v-if="paginaInicio">
<<<<<<< HEAD
                <img :src="new1.image_new" class="img-fluid small-square-image rounded-image image-custom" alt="Imagen Noticia 1">
=======
                <img :src="new1.image_new" class="img-fluid small-square-image rounded-image d-flex justify-content-end align-items-center" alt="Imagen Noticia 1">
>>>>>>> News
              </div>
              <div class="col-md-4" v-else>
                <img :src="new1.image_new" class="img-fluid fixed-size-image rounded-image" alt="Imagen Noticia 1">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                    <!-- Si estamos en la pagina de inicio no se vera el boton nuevo --> 
                  <h5 :class="{'small-title': paginaInicio}" class="card-title">{{ new1.title }}</h5>
                  <div v-if="paginaInicio">
                    <span v-if="index < 3" class="badge bg-primary red-badge">¡Nuevo!</span>
                  </div>
                  <p class="card-text" v-if="showReadMoreButton">{{ new1.description.substring(0, 100) }}...</p>
                  <button v-if="showReadMoreButton" @click.prevent="showModal(new1)" class="btn btn-primary">Leer más</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="newsModal" tabindex="-1" aria-labelledby="newsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newsModalLabel">{{ modalData.title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <img :src="modalData.image_new" class="img-fluid mb-3" alt="Imagen Noticia">
            <p>{{ modalData.description }}</p>
          </div>
          <!-- Botón Cerrar -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const news = ref([]);
const modalData = ref({});

// Aqui indicamos la pag actual en la que nos encontramos
const currentPage = window.location.pathname;

// Esto nos dice si se debe de mostrar el boton de leer mas 
const showReadMoreButton = ref(currentPage === '/noticias');
const paginaInicio = currentPage !== '/noticias';

// Fetch de las noticias
fetch('http://localhost:8080/api/v1/news')
  .then(response => response.json())
  .then(data => {
    // con esto organizamos por id las noticias, de las ultimas añadidas a las mas antiguas
    news.value = data.sort((a, b) => new Date(b.id) - new Date(a.id));
    console.log(data);
  });

const orderedNews = computed(() => {
  return news.value;
});

let myModalInstance = null;

const showModal = (new1) => {
  modalData.value = new1;
  myModalInstance = new bootstrap.Modal(document.getElementById('newsModal'));
  myModalInstance.show();
  console.log('Modal abierto');
}

const closeModal = () => {
  try {
    if (myModalInstance) {
      myModalInstance.hide();
      console.log('Modal cerrado');
    }
  } catch (error) {
    console.error('Error al intentar cerrar el modal:', error);
  }
};
</script>

<style scoped>
.card {
  display: flex;
  margin-bottom: 20px;
}

.shadow-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.small-square-image {
  width: 100px; 
  height: 100px; 
  object-fit: cover;
}

.fixed-size-image {
  width: 100%;
  height: 200px; 
  object-fit: cover;

  
}

.rounded-image {
  border-radius: 10px; 
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  flex-grow: 1;
}

.btn {
  align-self: flex-start;
}

.badge {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.small-title {
  font-size: 1rem; 
}

.red-badge {
  background-color: red !important; 
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.text-decoration-none {
  text-decoration: none; 
}

.text-dark {
  color: inherit; 
}

.news-section .first-news-card {
  margin-top: 20px;
}

.homepage-news-card {
  margin: 10px; 
  height: 120px;
<<<<<<< HEAD
}
.image-custom{
  margin-top: 10px;


}


.news-section .col-md-4:first-child .image-custom {
  margin-bottom: 10px;
=======
>>>>>>> News
}
</style>
