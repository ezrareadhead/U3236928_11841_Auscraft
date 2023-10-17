import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/result',
    name: 'result',
    component: () => import('../views/ResultView.vue')
  },
  {
    
  path: '/howitworks',
  name: 'howitworks',
  component: () => import('../views/HowView.vue')
  },]
})

export default router
