<template>
  <div class="container mt-5">
    <h2>Create User</h2>
    <form class="form-group" @submit.prevent="createUser">
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
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const user = ref({
      full_name: '',
      email: '',
      phone: '',
      alias: '',
      password: '',
      image_user: null,
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
      createUser
    };
  }
};
</script>


