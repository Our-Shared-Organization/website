import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MastersView from '@/views/MastersView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/contacts",
      name: "contacts",
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/masters',
      name: 'masters',
      component: MastersView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    }
  ],
})

export default router
