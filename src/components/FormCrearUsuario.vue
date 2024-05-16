<template>
  <div class="container mt-5">

    <div class="row justify-content-center">
      <h2>Create User</h2>
      <div class="col-8 col-md-6">
        <form class="form-group" @submit.prevent="createUser" enctype="multipart/form-data">
          <div class="form-group">
            <img id="imgUser" :src="imgUser" class="img-fluid rounded-circle" width="200" alt="">
            <input type="file" id="imageUser" @change="obtenerImagen" class="form-control-file">
            <label for="imageUser" class="btn btn-primary">Subir foto </label>
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
            <!-- No se como se hace para subir archivos, lo dejo comentado -->
            <!-- <label for="imageUser">Profile Image (Optional):</label>
        <input type="file" id="imageUser" class="form-control-file"> -->
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

function obtenerImagen(e) {
  const file = e.target.files[0];
  console.log(file);
  cargarImagen(file);
}

function cargarImagen(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    imgUser.value = e.target.result;
    user.value.image_user = e.target.result;
    console.log(e.target.result);
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

    const data = await response.json();

    if (response.ok) {
      successMessage.value = 'Usuario creado correctamente.';
      router.push("/login");
    } else {
      errorMessage.value = `Error al crear el usuario: ${data.message}`;
    }
  } catch (error) {
    errorMessage.value = `Error al crear el usuario: ${error.message}`;
  }
}
</script> 

<!-- <script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {


  setup() {
    const router = useRouter();
    let  imgUser = ref('');

    //funcion subir imagen 
    function obtenerImagen(e) {
      let file = e.target.files[0];
     console.log(file)
     // user.value.image_user = file;
     console.log( file)
      cargarImagen(file); 
    }

    function cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        imgUser.value = e.target.result;
        user.value.image_user = e.target.result;
        console.log(e.target.result);
      }
      reader.readAsDataURL(file);
    }

    //objeto de usuario 
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

        const data = await response.json();

        if (response.status === 200) {
          successMessage.value = 'Usuario creado correctamente.';
          router.push("/login")

        } else {
          errorMessage.value = 'Error al crear el usuario: ' + data.message;
        }
      } catch (error) {
        errorMessage.value = 'Error al crear el usuario: ' + error.message;
      }
    }

    return {
      user,
      successMessage,
      errorMessage,
      obtenerImagen,
      imgUser,
      createUser
    };
  } 
};
</script> -->

<style scoped>

 #imageUser {
  display: none;
}
</style>