import { defineStore } from 'pinia';

export const useIsLoggedStore = defineStore('isLogged', () => {
  return {
    isLoggedIn: false,
    user: null, // Agregamos una propiedad para almacenar el usuario
    loginError: '',
    async login(email, password) {
      try {
        const response = await fetch('http://localhost:8080/api/v1/usersLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
       
        const data = await response.json();

        if (response.ok) {
          if (response.status === 200) {
            this.isLoggedIn = true;
            this.user = data; // Almacenar el usuario devuelto por el backend
            this.loginError = ''; 
          } else {
            this.isLoggedIn = false;
            this.loginError = 'Usuario no encontrado';
          }
        } else {
          this.isLoggedIn = false;
          this.loginError = 'Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.isLoggedIn = false;
        this.loginError = 'Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null; // Limpiar el usuario al cerrar sesión
      this.loginError = ''; 
    }
  };
});



// import { useIsLoggedStore } from '@/stores/isLogged'; // Importa la tienda

// export default {
//   // Otros detalles del componente...
//   setup() {
//     const isLoggedStore = useIsLoggedStore(); // Obtiene la instancia de la tienda

//     // Lógica del componente...

//     // Ejemplo de cómo acceder al usuario almacenado en la tienda
//     const user = isLoggedStore.user;

//     // Otra lógica del componente...
    
//     return {
//       // Otros valores y funciones necesarios para el componente...
//       user // Retornar el usuario para que esté disponible en la plantilla del componente
//     };
//   }
// };