<script setup>
import { RouterLink, RouterView } from 'vue-router'
import EncabezadoLogo from './components/EncabezadoLogo.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <EncabezadoLogo />
  <NavBar />

  <!-- Dentro de RouterView es donde se visualizan las vistas -->
  <RouterView />

  <FooterComponent />
</template>

<style scoped>

</style>
