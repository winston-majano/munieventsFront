<script setup>
import { RouterLink, RouterView } from 'vue-router'
import EncabezadoLogo from './components/EncabezadoLogo.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <EncabezadoLogo></EncabezadoLogo>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/noticias">Noticias</RouterLink>
      <RouterLink to="/suscripcion">Suscripción</RouterLink>
    </nav>
  </header>

  <RouterView />

  <Footer></Footer>
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
