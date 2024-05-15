<script setup>
import { ref } from 'vue';
import { useIsLoggedStore } from '@/stores/isLogged';
import { useRouter } from 'vue-router';

const isLoggedStore = useIsLoggedStore();
console.log(isLoggedStore.user)
const router = useRouter();
const showCard = ref(true); 
const userDeleted = ref(false);
const userUpdated = ref(false); // Estado para mostrar el mensaje de usuario actualizado en el form de actualizar

// Función para alternar entre la tarjeta y el formulario
const toggleForm = () => {
  showCard.value = !showCard.value;
  userUpdated.value = false; // Reiniciar para volver a mostrar el mensaje sólo cuando cambia
  userDeleted.value = false; // Reiniciar para volver a mostrar el mensaje sólo cuando se borra
}

// Actualizar los datos del user
const saveUser = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/users/${isLoggedStore.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(isLoggedStore.user)
    });

    if (response.ok) {
      // Si la respuesta es OK, consideramos que la solicitud se completó con éxito, internamente es un cod 200
      console.log('Usuario actualizado con éxito');
      userUpdated.value = true;
      showCard.value = true;

    } else {
      throw new Error('Error al actualizar el usuario');
    }
  } catch (error) {
    console.error(error);
  }
}

//Función para eliminar el perfil de usuario
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
      isLoggedStore.isLoggedIn = false; //Para que salga del logout una vez eliminado el perfil
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
          <img :src="isLoggedStore.user.image_user" class="img-fluid rounded-circle ms-5 mt-5" alt="Imagen de usuario">
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
              <div class="mb-3">
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre:</label>
                  <input type="text" class="form-control" id="nombre" v-model="isLoggedStore.user.full_name">
                </div>
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
              <!-- <div class="mb-3">
                <label for="phone" class="form-label">Password:</label>
                <input type="text" class="form-control" id="phone" v-model="isLoggedStore.user.password">
              </div> -->
              <div class="text-center">
                <button type="submit" class="btn btn-primary mx-1 my-2">Guardar</button>
                <button type="button" class="btn btn-secondary mx-1 my-2" @click="toggleForm">Cancelar</button>
                <button type="button" class="btn btn-warning mx-1 my-2" @click="deleteUser">Eliminar Perfil</button>
              </div>
              <div v-if="userUpdated" class="alert alert-success mt-3" role="alert">
                ¡Usuario actualizado con éxito!
              </div>
              <div v-if="userDeleted" class="alert alert-success mt-3 d-flex flex-column text-center" role="alert">
                ¡Usuario eliminado con éxito!
                <button class="btn btn-primary mt-3" @:click="volverInicio">Volver a inicio</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img{
  max-width: 150px;
  max-height: 150px;
}
</style>