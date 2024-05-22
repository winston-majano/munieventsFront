<script setup>
import { useIsLoggedStore } from '@/stores/isLogged';
import { useRouter } from 'vue-router';

const isLoggedStore = useIsLoggedStore();
const router = useRouter();

const handleLogout = () => {
    isLoggedStore.logout();
    console.log('Estado de loggedIN ==> ' + isLoggedStore.isLoggedIn);
    router.push('/');
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                    <li class="nav-item active">
                        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/noticias" class="nav-link">Noticias</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/subscripcion" class="nav-link">Subscripción</RouterLink>
                    </li>
                    <li class="nav-item dropdown" v-if="isLoggedStore.isLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Mi Cuenta
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">
                                <RouterLink to="/crearEvento" class="nav-link">Crear un Evento</RouterLink>
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <RouterLink to="/misEventos" class="nav-link">Mis Eventos</RouterLink>
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <RouterLink to="/miPerfil" class="nav-link">Mi Perfil</RouterLink></a></li>
                        </ul>
                    </li>
                    <li class="nav-item" v-if="isLoggedStore.isLoggedIn">
                        <img v-if="isLoggedStore.user.image_user" :src="`data:image/png;base64,${isLoggedStore.user.image_user}`" class="img-user" alt="Imagen de usuario">
                        <i v-else class="fas fa-user-circle mt-1" style="font-size: 2rem; color: gray;"></i>
                    </li>
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0  ms-4" action="buscadorsinlogear.html" method="GET">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form> -->
                <form class="form-inline my-2 my-lg-0 me-lg-5  ms-4" action="" method="GET">
                    <button class="btn btn-outline-primary my-2 my-sm-0" v-if="!isLoggedStore.isLoggedIn">
                        <RouterLink to="/login" style="text-decoration: none;">Login</RouterLink>
                    </button>
                    <button @click="handleLogout" class="btn btn-outline-primary my-2 my-sm-0" v-else>
                        Logout
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.img-user{
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
</style>
