<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">Inicio de sesión</h5>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Correo electrónico"
                  required>
              </div>
              <div class="mb-3 position-relative">
                <label for="password" class="form-label">Contraseña</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control" id="password" v-model="password" placeholder="Contraseña"
                  required>
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" @click="togglePasswordVisibility" class="eye-icon"></i>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
              </div>
              <div class="text-center mt-2">
                <RouterLink to="/recuperacion" class="mx-4 link">¿Olvidaste tu contraseña?</RouterLink>
                <RouterLink to="/crearUsuario" class="mx-4 link">Registrarse</RouterLink>
              </div>
            </form>
            <p v-if="isLoggedStore.loginError" class="text-danger mt-3 text-center">{{ isLoggedStore.loginError }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsLoggedStore } from '@/stores/isLogged';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const email = ref(null);
const password = ref(null);
const isLoggedStore = useIsLoggedStore();
const router = useRouter();
const showPassword = ref(false);

const handleLogin = async () => {
  await isLoggedStore.login(email.value, password.value);

  if (isLoggedStore.isLoggedIn) {
    router.push('/');
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.link {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: blue;
  text-decoration: underline;
}

.position-relative {
  position: relative;
}

.eye-icon {
  position: absolute;
  top: 74%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>