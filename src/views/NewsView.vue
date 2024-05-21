<script setup>
import NewsComponent from '@/components/NewsComponent.vue';
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <header>
        <EncabezadoLogo />
        <NavBar />
    </header>
    <main>
        <NewsComponent></NewsComponent>
    </main>

    <footer class="mt-2">
        <FooterComponent />
    </footer>
</template>
