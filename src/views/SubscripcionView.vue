<script setup>
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';
import PlanBasicoComponent from '@/components/PlanBasicoComponent.vue';
import PlanFamiliaComponent from '@/components/PlanFamiliaComponent.vue';
import PlanAmigosComponent from '@/components/PlanAmigosComponent.vue';

</script>

<template>
    <header>
        <EncabezadoLogo />
        <NavBar />
    </header>
    <main>
        <div class="container">
            <div class="section-title text-center">
                <h1>Subscripción Trimestral</h1>
                <p>Aprovecha al maximo las ventajas de tu subscripción</p>
            </div>
            <div class="row text-center">
                <PlanBasicoComponent />
                <PlanFamiliaComponent />
                <PlanAmigosComponent />
            </div>
        </div>
        <footer class="mt-2">
            <FooterComponent />
        </footer>
    </main>
</template>
