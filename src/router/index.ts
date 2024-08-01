import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Preview from '../pages/Preview.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/preview', component: Preview },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
