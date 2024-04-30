<script setup>
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import NavBar from '@/components/NavBar.vue';
import MiPerfilComponent from '@/components/MiPerfilComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>

  <header>
    <EncabezadoLogo />
    <NavBar />
  </header>

  <main>
    <MiPerfilComponent />
  </main>

  <footer>
    <FooterComponent />
  </footer>

</template>