import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIsLoggedStore = defineStore('isLogged', () => {
  const isLoggedIn = ref(false);
  const user = ref(null);
  const loginError = ref('');

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/usersLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        isLoggedIn.value = true;
        user.value = data;
        loginError.value = '';
      } else if (response.status === 404) {
        isLoggedIn.value = false;
        loginError.value = 'email no válido, usuario no encontrado';
      } else if (response.status === 401) {
        isLoggedIn.value = false;
        loginError.value = 'Password incorrecto';
      } else {
        isLoggedIn.value = false;
        loginError.value = 'Error al intentar iniciar sesión.';
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      isLoggedIn.value = false;
      loginError.value = 'Error al intentar iniciar sesión';
    }
  };

  const logout = () => {
    isLoggedIn.value = false;
    user.value = '';
    loginError.value = '';
  };

  const setUser = (updatedUser) => {
    user.value = updatedUser;
  };

  return {
    isLoggedIn,
    user,
    loginError,
    login,
    logout,
    setUser
  };
});
