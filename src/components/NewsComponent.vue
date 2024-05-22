<template>
    <div class="container">
      <div class="row">
        <div class="col-12" v-for="new1 in news" :key="new1.id">
          <div class="card mb-4">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="new1.image_new" class="img-fluid fixed-size-image" alt="Imagen Noticia 1">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ new1.title }}</h5>
                  <p class="card-text">{{ new1.description.substring(0, 100) }}...</p>
                  <button @click="showModal(new1)" class="btn btn-primary">Leer más</button>
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
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img :src="modalData.image_new" class="img-fluid mb-3" alt="Imagen Noticia">
              <p>{{ modalData.description }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
  
  fetch('http://localhost:8080/api/v1/news')
    .then(response => response.json())
    .then(data => {
      news.value = data;
      console.log(data);
    });
  
  const showModal = (new1) => {
    modalData.value = new1;
    const myModal = new bootstrap.Modal(document.getElementById('newsModal'));
    myModal.show();
  };
  </script>
  

  
<style scoped>
.card {
  display: flex;
  margin-bottom: 20px;
}

.fixed-size-image {
  width: 100%;
  height: 200px; /* Ajusta este valor según el tamaño deseado */
  object-fit: cover;
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
</style>
