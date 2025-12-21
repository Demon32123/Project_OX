import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/meets',
    name: 'Meets',
    component: () => import('../views/Meets.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/rools',
    name: 'Rools',
    component: () => import('../views/Rools.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router