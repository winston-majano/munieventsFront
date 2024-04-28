<script setup>
import FormCrearUsuario from '@/components/FormCrearUsuario.vue';
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <header>
        <EncabezadoLogo />
    </header>
    <h1>formulario crear usuarios</h1>
    <FormCrearUsuario/>
    <footer>
        <FooterComponent />
    </footer>
</template>