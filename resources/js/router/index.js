import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Generate from '../views/Generate.vue'
import Explore from '../views/Explore.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/generate',
    name: 'Generate',
    component: Generate
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
