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
      path: '/recuperacion',
      name: 'recuperacion',

      component: () => import('../views/RecuperarPasswordView.vue')
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
      path: '/crearUsuario',
      name: 'crearUsuario',

      component: () => import('../views/CrearUsuarioView.vue')
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
        },

        {
          path: '/About',
          name: 'Sobre nosotros',
          component: () => import('../views/SobreNosotrosView.vue')
        }
      ]

    }
  ]
})

export default router
