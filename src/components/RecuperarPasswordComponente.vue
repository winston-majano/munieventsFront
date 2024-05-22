<template>
    <div class="container d-flex flex-column justify-content-center align-items-center m-5">
        <h3 class="m-5">En construcción... <RouterLink to="/" class="nav-link d-inline fst-italic">volver a inicio</RouterLink></h3>

        
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="passwordactual" class="form-label">Password actual</label>
                <input type="password" class="form-control" id="passwordactual">
            </div>
            <div class="mb-3">
                <label for="passwordnuevo" class="form-label">Nuevo Password</label>
                <input type="password" class="form-control" id="passwordnuevo">
            </div>
            <div class="mb-3">
                <label for="passwordnuevorepeticion" class="form-label">Repetir nuevo Password</label>
                <input type="password" class="form-control" id="passwordnuevorepeticion">
            </div>
            <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>

    </div>
</template>

<script setup>
// import { useRouter } from 'vue-router';

</script>