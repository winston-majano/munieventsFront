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
     
      component: () => import('../views/NoticiasView.vue')
    },
    {
      path: '/login',
      name: 'login',
     
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
