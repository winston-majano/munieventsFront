<script setup>
import LoginPruebaComp from '@/components/LoginPruebaComp.vue'
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <header>
    <EncabezadoLogo />
  </header>
  <main>
    <LoginPruebaComp/>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
