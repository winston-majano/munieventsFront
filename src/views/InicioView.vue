<script setup>
import EventoComponent from '@/components/EventoComponent.vue'
import NewsComponent from '@/components/NewsComponent.vue'
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
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-8">
          <EventoComponent />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <NewsComponent />
        </div>
      </div>
    </div>
  </main>
  <footer>
    <FooterComponent />
  </footer>

</template>
