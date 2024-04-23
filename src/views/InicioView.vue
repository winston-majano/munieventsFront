<script setup>
import EventoComponent from '@/components/EventoComponent.vue'
import NewsComponent from '@/components/NewsComponent.vue'
import EncabezadoLogo from '@/components/EncabezadoLogo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
<<<<<<< HEAD
 
  <h1>Contenido de la vista principal</h1>
 
<div class="container">
  <div class="row">
    <div class="col-8">
       <EventoComponent/>
    </div>
    <div class="col-4">
      <NewsComponent/>
    </div>
  </div>
</div>
=======
  <header>
    <EncabezadoLogo />
    <NavBar />
  </header>
>>>>>>> 15177acd238cd1f8e30d029740df01244dd356b3


  <main>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <EventoComponent />
        </div>
        <div class="col-4">
          <NewsComponent />
        </div>
      </div>
    </div>

  </main>
  <footer>
    <FooterComponent />
  </footer>

</template>
