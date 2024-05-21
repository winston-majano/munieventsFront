<template>

    <footer class="bg-grey footer">
        <div class="footer-top py-8">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-8 pe-xxl-10">
                        <div class="row gy-5">
                            <div class="col-6 col-lg-4">
                                <h5 class="text-white footer-title-01">MuniEvents</h5>
                                <ul class="list-unstyled footer-link-01 m-0">
                                    <li>
                                        <a class="text-white text-opacity-75" href="/About">Sobre nosotros</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-4">
                                <h5 class="text-white footer-title-01">Acerca de</h5>
                                <ul class="list-unstyled footer-link-01 m-0">
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Servicio al Cliente</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Política de privacidad</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Política de cookies</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Terminos y condiciones</a>
                                    </li>
                                    <li><a class="text-white text-opacity-75" href="#"></a></li>
                                </ul>
                            </div>
                            <div class="col-6 col-lg-4">
                                <h5 class="text-white footer-title-01">Necesitas Ayuda?</h5>
                                <ul class="list-unstyled footer-link-01 m-0">
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Contacta con nosotros</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Preguntas frecuentes</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Ofertas</a>
                                    </li>
                                    <li>
                                        <a class="text-white text-opacity-75" href="#">Nuestros eventos</a>
                                    </li>
                                    <li>
                                        <img src="@/img/generalitat.img.png" alt="Cartel generalitat Catalunya"
                                            style="max-width: 100px; max-height: auto" />
                                    </li>
                                    <li>
                                        <img src="@/img/ajuntament.cornellaimg.jpg"
                                            alt="Cartel ajuntament Cornellà del Llobregat"
                                            style="max-width: 100px; max-height: auto" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h5 class="text-white footer-title-01 fs-5">
                            Suscríbete a nuestra newsletter y obtén un 15% de descuento en
                            tu próximo compra.
                        </h5>
                        <div>
                            <form @submit.prevent="submitForm" class="d-flex flex-row mb-2 p-1 bg-white input-group">
                                <input type="email" v-model="email" class="form-control rounded border-0"
                                    placeholder="Tu email" />
                                <button class="btn btn-secondary flex-shrink-0" type="submit">Suscribete</button>
                            </form>
                            <div v-html="message"></div>
                        </div>
                        <div class="social-icons text-center">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom bg-dark small py-3 border-top border-white border-opacity-10">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start py-1">
                        <p class="m-0 text-white text-opacity-75">
                            © 2024 copyright<a class="text-reset" href="#">MuniEvents.com</a>
                        </p>
                    </div>
                    <div class="col-md-6 text-center text-md-end py-1">
                        <ul class="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                            <li class="p-0 mx-3 ms-md-0 me-md-3">
                                <a href="#" class="text-white text-opacity-75">Privacidad &amp; Politicas</a>
                            </li>
                            <li class="p-0 mx-3 ms-md-0 me-md-3">
                                <a href="#" class="text-white text-opacity-75">Preguntas y respuestas</a>
                            </li>
                            <li class="p-0 mx-3 ms-md-0 me-md-3">
                                <a href="#" class="text-white text-opacity-75">Entrevistas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
export default {
    data() {
        return {
            email: '',
            message: ''
        };
    },
    
    methods: {
        submitForm() {
            this.message = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <h1>Gracias por contactar con nosotros <strong>✔</strong></h1>: <strong>${this.email}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
       
      `;
            this.email = '';
        }
    }
};

</script>

<style scoped>
.bg-grey {
    background-color: #343a40;
}

.py-8 {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
}

.footer-link-01 li+li {
    padding-top: 0.8rem;
}

.footer-title-01 {
    font-size: 16px;
    margin: 0 0 20px;
    font-weight: 600;
}

.footer-title-01 {
    font-size: 16px;
    margin: 0 0 20px;
    font-weight: 600
}

.footer-link-01 li+li {
    padding-top: .8rem
}

@media (max-width: 991.98px) {
    .footer-link-01 li+li {
        padding-top: .6rem
    }
}

.footer-link-01 a {
    position: relative;
    display: inline-block;
    vertical-align: top
}

.footer-link-01 a:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: auto;
    right: 0;
    width: 0;
    height: 1px;
    transition: ease all .35s;
    background: currentColor
}

a {
    text-decoration: none;
}

.social-icons.text-center {
    display: flex;
    justify-content: center;
    gap: 4px;
}

.footer-link-01 a:hover:after {
    left: 0;
    right: auto;
    width: 100%
}
</style>