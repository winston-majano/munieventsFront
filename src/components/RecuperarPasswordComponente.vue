<template>
    <div class="container d-flex flex-column justify-content-center align-items-center m-5">
        <h3 class="m-5">En construcción... <RouterLink to="/" class="nav-link d-inline fst-italic">volver a inicio</RouterLink></h3>

        <!-- Tarjeta con sombra -->
        <div class="card p-4 shadow">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu email">
                </div>
                <button type="submit" class="btn btn-primary">Enviar solicitud</button>
            </form>
        </div>
    </div>
</template>

<script setup>
// import { useRouter } from 'vue-router';

</script>