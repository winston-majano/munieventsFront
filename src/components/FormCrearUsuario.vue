<template>
  <div class="container mt-5">
    <div class="card m-2 shadow rounded">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-10 col-md-8 border-gray" >
            <form class="form-group" @submit.prevent="createUser" enctype="multipart/form-data">
              <div class="form-group text-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <img v-if="imgUser" id="imgUser" :src="imgUser" class="m-2" style="max-width: 200px;" alt="">
                  <i v-else class="fas fa-user-circle" style="font-size: 4rem; color: gray;"></i>
                  <label for="imageUser" class="btn btn-primary btn-lg m-4">Subir foto</label>
                  <input type="file" id="imageUser" @change="obtenerImagen" class="form-control-file d-none">
                </div>
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

              <div class="form-group mt-4 text-center">
                <button type="submit" class="btn btn-primary btn-block my-2">Create User</button>
              </div>

              <div v-if="successMessage" class="alert alert-success mt-3 text-center" role="alert">
                {{ successMessage }}
              </div>
              <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
                {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
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
  qty_event_sub: 0
});
const successMessage = ref('');
const errorMessage = ref('');
const isLoggedStore = useIsLoggedStore();

function obtenerImagen(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    imgUser.value = e.target.result;
  }
  reader.readAsDataURL(file);
}

async function createUser() {
  try {
    const formData = new FormData();
    formData.append('full_name', user.value.full_name);
    formData.append('email', user.value.email);
    formData.append('phone', user.value.phone);
    formData.append('alias', user.value.alias);
    formData.append('password', user.value.password);
    formData.append('image_user', document.getElementById('imageUser').files[0]);

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      successMessage.value = 'Usuario creado correctamente.';
      isLoggedStore.loginError = '';
      setTimeout(()=>{
        router.push("/login");
      },2000);
    } else if (response.status === 401) {
      errorMessage.value = 'Error al crear el usuario: email no válido, ya existe.';
      successMessage.value = '';
    } else {
      const data = await response.json();
      errorMessage.value = `Error al crear el usuario: ${data.message}`;
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

img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  box-shadow: 2px 2px 15px rgb(190, 183, 183);
}
</style>
