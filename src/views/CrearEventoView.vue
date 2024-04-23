<script setup>
import FormCrearEvento from '@/components/FormCrearEvento.vue';
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';
</script>


<template>
   <header>
    <EncabezadoLogo />
    <NavBar />
  </header>
   <FormCrearEvento />
   <footer>
    <FooterComponent />
  </footer>
</template>

