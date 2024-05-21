<script setup>
import LoginUsuarioComponent from '@/components/LoginUsuarioComponent.vue'
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <header>
    <EncabezadoLogo />
  </header>
  <main>
    <LoginUsuarioComponent/>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
