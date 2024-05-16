<script setup>
import { ref } from 'vue';
import { useIsLoggedStore } from '@/stores/isLogged';
import { useRouter } from 'vue-router';

const isLoggedStore = useIsLoggedStore();
const router = useRouter();
const showCard = ref(true); 
const userDeleted = ref(false);
const userUpdated = ref(false);
const imgUser = ref(`data:image/png;base64,${isLoggedStore.user.image_user}`);

const toggleForm = () => {
  showCard.value = !showCard.value;
  userUpdated.value = false;
  userDeleted.value = false;
}

const obtenerImagen = (e) => {
  const file = e.target.files[0];
  cargarImagen(file);
}

const cargarImagen = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    imgUser.value = e.target.result;
    isLoggedStore.user.image_user = e.target.result.split(',')[1]; // Guardar solo la parte base64
  }
  reader.readAsDataURL(file);
}

const saveUser = async () => {
  try {
    const userPayload = {
      full_name: isLoggedStore.user.full_name,
      alias: isLoggedStore.user.alias,
      email: isLoggedStore.user.email,
      phone: isLoggedStore.user.phone,
      image_user: imgUser.value.split(',')[1] // Enviar solo la parte base64
    };

    const response = await fetch(`http://localhost:8080/api/v1/users/${isLoggedStore.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    });

    if (response.ok) {
      userUpdated.value = true;
      showCard.value = true;
    } else {
      throw new Error('Error al actualizar el usuario');
    }
  } catch (error) {
    console.error(error);
  }
}

const deleteUser = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/users/${isLoggedStore.user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('Perfil eliminado con éxito');
      isLoggedStore.isLoggedIn = false;
      userDeleted.value = true;
    } else {
      throw new Error('Error al eliminar el perfil');
    }
  } catch (error) {
    console.error(error);
  }
}

const volverInicio = () => {
  router.push('/')
}
</script>

<template>
  <div class="container my-3">
    <div class="row justify-content-center">
      <div class="col-md-6" v-if="showCard">
        <div class="card border-primary bg-light shadow">
          <div class="bg-secondary d-flex justify-content-center align-items-center">
            <img :src="imgUser" class="rounded-circle my-4" alt="Imagen de usuario">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">{{ isLoggedStore.user.full_name }}</h5>
            <p class="card-text">
              <span class="fw-bold ms-5">Alias:</span> {{ isLoggedStore.user.alias }}
              <br>
              <span class="fw-bold ms-5">Email:</span> {{ isLoggedStore.user.email }}
              <br>
              <span class="fw-bold ms-5">Teléfono:</span> {{ isLoggedStore.user.phone }} <br>
              <span class="fw-bold ms-5">Eventos suscritos:</span> {{ isLoggedStore.user.qty_event_sub }}
            </p>
            <div class="text-center">
              <button type="button" class="btn btn-primary" @click="toggleForm">Editar/Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-else>
        <div class="card border-primary bg-light shadow">
          <div class="card-body">
            <h5 class="card-title text-center">Editar Usuario</h5>
            <form @submit.prevent="saveUser">
              <div class="mb-3 text-center d-flex flex-column justify-content-center align-items-center">
                <img id="imgUser" :src="imgUser" class="img-fluid rounded-circle" width="100" alt="">
                <input type="file" id="imageUser" @change="obtenerImagen" class="form-control-file d-none">
                <label for="imageUser" class="btn btn-secondary mt-2">Subir nueva foto</label>
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" v-model="isLoggedStore.user.full_name">
              </div>
              <div class="mb-3">
                <label for="alias" class="form-label">Alias:</label>
                <input type="text" class="form-control" id="alias" v-model="isLoggedStore.user.alias">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" v-model="isLoggedStore.user.email">
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Teléfono:</label>
                <input type="text" class="form-control" id="phone" v-model="isLoggedStore.user.phone">
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mx-1 my-2">Guardar</button>
                <button type="button" class="btn btn-secondary mx-1 my-2" @click="toggleForm">Cancelar</button>
                <button type="button" class="btn btn-danger mx-1 my-2" @click="deleteUser">Eliminar Perfil</button>
              </div>
              <div v-if="userUpdated" class="alert alert-success mt-3" role="alert">
                ¡Usuario actualizado con éxito!
              </div>
              <div v-if="userDeleted" class="alert alert-success mt-3 d-flex flex-column text-center" role="alert">
                ¡Usuario eliminado con éxito!
                <button class="btn btn-primary mt-3" @click="volverInicio">Volver a inicio</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#imageUser {
  display: none;
}

img {
  height: 100px;
  width: 100px;
}
</style>

