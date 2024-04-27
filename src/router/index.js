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
      name: 'miCuenta',
      path: '/miCuenta',
     // component: () => import('../views/MiCuentaView.vue'),
      children: [
        {
          path: '/miPerfil',
          name: 'miPerfil',
          component: () => import('../views/MiPerfilView.vue')
        },
        {
          path: '/misEventos',
          name: 'misEventos',
          component: () => import('../views/MisEventosView.vue')
        }
        ,
        {
          path: '/crearEvento',
          name: 'crearEvento',
          component: () => import('../views/CrearEventoView.vue')
        }
      ]

    }
  ]
})

export default router
