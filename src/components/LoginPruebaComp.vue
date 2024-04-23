<!-- {
    "email": "usuario@mail.com",
    "password": "1234"
 } -->
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
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Correo electrónico" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="Contraseña" required>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                </div>
              </form>
              <p v-if="isLoggedStore.loginError" class="text-danger mt-3">{{ isLoggedStore.loginError }}</p>
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
  
  const handleLogin = async () => {
    await isLoggedStore.login(email.value, password.value);
  
    console.log("Se ha iniciado el proceso de inicio de sesión.");
    console.log('Email: ' + email.value);
    console.log('Password: ' + password.value);
    
    if (isLoggedStore.isLoggedIn) {
      router.push('/');
    }
  };
  </script>
  