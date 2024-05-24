<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="new1 in news" :key="new1.id">
        <div class="card mb-4">
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center align-items-center" v-if="paginaInicio">
              <img :src="new1.image_new" class="img-fluid small-square-image rounded-image" alt="Imagen Noticia 1">
            </div>
            <div class="col-md-4" v-else>
              <img :src="new1.image_new" class="img-fluid fixed-size-image rounded-image" alt="Imagen Noticia 1">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 :class="{'small-title': paginaInicio}" class="card-title">{{ new1.title }}</h5>
                <div v-if="paginaInicio">
                  <span class="badge bg-primary">Categoría 1</span>
                  <span class="badge bg-secondary">Categoría 2</span>
                </div>
                <p class="card-text" v-if="showReadMoreButton">{{ new1.description.substring(0, 100) }}...</p>
                <!-- Condición para mostrar el botón Leer más -->
                <button v-if="showReadMoreButton" @click="showModal(new1)" class="btn btn-primary">Leer más</button>
              </div>
            </div>
          </div>
        </div>
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
import { ref } from 'vue';

const news = ref([]);
const modalData = ref({});

// con eso sabemos en que localizacion de la pagina estamos
const currentPage = window.location.pathname;

// esto es para hacer que el boton no se muestre si esta en una pagina diferente a noticia
const showReadMoreButton = ref(currentPage === '/noticias');
const paginaInicio = currentPage !== '/noticias';

fetch('http://localhost:8080/api/v1/news')
  .then(response => response.json())
  .then(data => {
    news.value = data;
    console.log(data);
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

/* redondea la imagen */
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

/*título más pequeño para la pagina de inicio */
.small-title {
  font-size: 1rem; 
}
</style>
