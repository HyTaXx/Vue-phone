import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import AppelsView from '../views/AppelsView.vue'
import PhoneView from '../views/PhoneView.vue'

const routes = [
  {
    path: '/contactView',
    name: 'contactView',
    component: ContactView
  },
  {
    path: '/appelsView',
    name: 'appelsView',
    component: AppelsView
  },
  {
    path: '/phoneView',
    name: 'phoneView',
    component: PhoneView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
