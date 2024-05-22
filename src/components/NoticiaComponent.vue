<template>
<div class="container mt-100 mt-60">
    <div class="row" v-for="new1 in news" :key="new1.id">
        <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">{{ new1.title }}</h4>
                <p class="text-muted para-desc mx-auto mb-0">{{ new1.description }}</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="blog-post rounded border">
                <div class="blog-img d-block overflow-hidden position-relative">
                    <img src="https://www.bootdey.com/image/350x280/FF7F50/000000" class="img-fluid rounded-top" alt="">
                    <div class="overlay rounded-top bg-dark"></div>
                    <div class="post-meta">
                        <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                        <a href="javascript:void(0)" class="text-light read-more">Leer más <i class="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div class="content p-3">
                    <small class="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="javascript:void(0)" class="text-primary">Marketing</a></small>
                    <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">{{ new1.title }}</a></h4>
                    <p class="text-muted mt-2">{{ new1.description }}</p>
                    <div class="pt-3 mt-3 border-top d-flex">
                        <img :src='new1.image_new' class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="">
                        <div class="author mt-2">
                            <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Lisa Marvel</a></h6>
                        </div>
                    </div>
                </div>
            </div><!--end blog post-->
        </div><!--end col-->
        
        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="blog-post rounded border">
                <div class="blog-img d-block overflow-hidden position-relative">
                    <img src="https://www.bootdey.com/image/350x280/6495ED/000000" class="img-fluid rounded-top" alt="">
                    <div class="overlay rounded-top bg-dark"></div>
                    <div class="post-meta">
                        <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                        <a href="javascript:void(0)" class="text-light read-more">Read More <i class="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div class="content p-3">
                    <small class="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="javascript:void(0)" class="text-primary">Event</a></small>
                    <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">{{  }}</a></h4>
                    <p class="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                    <div class="pt-3 mt-3 border-top d-flex">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="">
                        <div class="author mt-2">
                            <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Joya Aafri</a></h6>
                        </div>
                    </div>
                </div>
            </div><!--end blog post-->
        </div><!--end col-->
        
        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="blog-post rounded border">
                <div class="blog-img d-block overflow-hidden position-relative">
                    <img src="https://www.bootdey.com/image/350x280/FF1493/000000" class="img-fluid rounded-top" alt="">
                    <div class="overlay rounded-top bg-dark"></div>
                    <div class="post-meta">
                        <a href="javascript:void(0)" class="text-light d-block text-right like"><i class="mdi mdi-heart"></i> 33</a>
                        <a href="javascript:void(0)" class="text-light read-more">Leer más <i class="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div class="content p-3">
                    <small class="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="javascript:void(0)" class="text-primary">Software</a></small>
                    <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">Quick guide on business with friends.</a></h4>
                    <p class="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                    <div class="pt-3 mt-3 border-top d-flex">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="">
                        <div class="author mt-2">
                            <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark name">Martin Sobhe</a></h6>
                        </div>
                    </div>
                </div>
            </div><!--end blog post-->
        </div><!--end col-->
    </div><!--end row-->
</div>
</template>

<script setup>
 
    // URL de tu API
    const apiUrl = 'http://localhost:8080/api/v1/news';

    // Realizar la solicitud utilizando fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {


        // Estilizar la redacción
        const contenidoElement = document.querySelector('#contenido');
        contenidoElement.textContent = data.description;
        contenidoElement.style.textAlign = 'justify'; // Alineación justificada
        contenidoElement.style.lineHeight = '1.9'; // Altura de línea

        // Resto del código (si es necesario)
      })
      .catch(error => console.error('Error al obtener datos:', error));

</script>

<style scoped>
body{margin-top:20px;
background:#f5f5f5;
}
.blog-post {
  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
}

.blog-post .blog-img .overlay,
.blog-post .blog-img .post-meta {
  position: absolute;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.blog-post .blog-img .overlay {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.blog-post .blog-img .post-meta {
  bottom: 5%;
  right: 5%;
  z-index: 1;
}

.blog-post .blog-img .post-meta .read-more:hover {
  color: #6dc77a !important;
}

.blog-post .content h1, .blog-post .content h2, .blog-post .content h3, .blog-post .content h4, .blog-post .content h5, .blog-post .content h6 {
  line-height: 1.2;
}

.blog-post .content .title {
  font-size: 18px;
}

.blog-post .content .title:hover {
  color: #6dc77a !important;
}

.blog-post .content .author .name:hover {
  color: #6dc77a !important;
}

.blog-post:hover {
  -webkit-transform: translateY(-7px);
          transform: translateY(-7px);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.blog-post:hover .blog-img .overlay {
  opacity: 0.65;
}

.blog-post:hover .blog-img .post-meta {
  opacity: 1;
}

.blog-post .post-meta .like i,
.profile-post .like i {
  -webkit-text-stroke: 2px #dd2427;
  -webkit-text-fill-color: transparent;
}

.blog-post .post-meta .like:active i, .blog-post .post-meta .like:focus i,
.profile-post .like:active i,
.profile-post .like:focus i {
  -webkit-text-stroke: 0px #dd2427;
  -webkit-text-fill-color: #dd2427;
}

.avatar.avatar-ex-sm {
    height: 36px;
}
.shadow {
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) !important;
}

.text-muted {
    color: #8492a6 !important;
}


.para-desc {
    max-width: 600px;
}
.text-muted {
    color: #8492a6 !important;
}

.section-title .title {
    letter-spacing: 0.5px;
    font-size: 30px;
}
</style>