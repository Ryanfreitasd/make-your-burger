import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import('../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router