<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6">
        <form class="form-group" @submit.prevent="createUser" enctype="multipart/form-data">
          <div class="form-group">
            <img id="imgUser" :src="imgUser" class="img-fluid rounded-circle" width="200" alt="">
            <input type="file" id="imageUser" @change="obtenerImagen" class="form-control-file">
            <label for="imageUser" class="btn btn-primary">Subir foto</label>
          </div>

          <div class="form-group">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" v-model="user.full_name" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="user.email" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" v-model="user.phone" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="alias">Username (Alias):</label>
            <input type="text" id="alias" v-model="user.alias" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="user.password" class="form-control" required>
          </div>

          <div class="form-group mt-1">
            <div>
              <button type="submit" class="btn btn-primary my-2">Create User</button>
            </div>
            <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
              {{ errorMessage }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useIsLoggedStore } from '@/stores/isLogged';

const router = useRouter();
const imgUser = ref('');
const user = ref({
  full_name: '',
  email: '',
  phone: '',
  alias: '',
  password: '',
  image_user: '',
  qty_event_sub: 0
});
const successMessage = ref('');
const errorMessage = ref('');
const isLoggedStore = useIsLoggedStore();

function obtenerImagen(e) {
  const file = e.target.files[0];
  console.log(`que hay en imagen?? : ${file}`);
  cargarImagen(file);
}

function cargarImagen(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    imgUser.value = e.target.result;
    user.value.image_user = e.target.result.split(',')[1]; // Aquí se guarda solo la parte base64
  }
  reader.readAsDataURL(file);
}


async function createUser() {
  try {
    console.log(user.value.image_user);
    const jsonData = JSON.stringify(user.value);
    const response = await fetch('http://localhost:8080/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    });

    // Verifica el estado de la respuesta antes de intentar parsear JSON
    if (response.ok) {
      successMessage.value = 'Usuario creado correctamente.';
      isLoggedStore.loginError=''; //Para que no se siga mostrando el mensaje de error en el login
      router.push("/login");
    } else if (response.status === 401) {
      errorMessage.value = 'Error al crear el usuario: email no válido, ya existe.';
      successMessage.value = '';
    } else {
      // Intenta parsear el JSON solo si no es un estado 401
      try {
        const data = await response.json();
        errorMessage.value = `Error al crear el usuario: ${data.message}`;
      } catch (e) {
        // Si no se puede parsear el JSON, muestra un mensaje de error
        errorMessage.value = 'Error al crear el usuario: respuesta inesperada del servidor.';
      }
    }
  } catch (error) {
    errorMessage.value = `Error al crear el usuario: ${error.message}`;
  }
}
</script>

<style scoped>
#imageUser {
  display: none;
}
</style>
