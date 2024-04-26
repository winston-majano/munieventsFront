import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/subscripcion',
      name: 'subscripcion',
      
      component: () => import('../views/SubscripcionView.vue')
    },
    {
      path: '/noticias',
      name: 'noticias',
     
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/login',
      name: 'login',
     
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/crearEvento',
      name: 'crearEvento',
     
      component: () => import('../views/CrearEventoView.vue')
    },
    {
      path: '/miCuenta',
      name: 'miCuenta',
     
      component: () => import('../views/MiCuentaView.vue')
    }
  ]
})

export default router
