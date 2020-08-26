import { createRouter, createWebHistory } from 'vue-router'
import Enregistrement from '../views/Enregistrement.vue';
import Liste from '../views/Liste.vue';

const routes = [
  {
    path: '/',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/Enregistrement',
    name: 'Enregistrement',
    component: Enregistrement
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
