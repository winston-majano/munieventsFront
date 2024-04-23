import { defineStore } from 'pinia';

export const useIsLoggedStore = defineStore('isLogged', () => {
  return {
    isLoggedIn: false,
    loginError: '',
    async login(email, password) {
      console.log('Que hay dentro de email y password?? ')
        console.log(email, password)
      try {
        const response = await fetch('http://localhost:8080/api/v1/usersLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        console.log('Por segunda vez..Que hay dentro de email y password??')
        console.log('==>'+email, password)
        console.log('hasta aquí funciona?')
        const data = await response.json();
        console.log('Que hay dentro de data?? '+data) 

        if (response.ok) {
          if (data == 1) {
            this.isLoggedIn = true;
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
      this.loginError = ''; 
    }
  };
})