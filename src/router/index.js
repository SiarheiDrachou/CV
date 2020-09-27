import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Car-blog',
    name: 'Car-blog',
    component: () => import('../views/Car-blog.vue')
  },
  {
    path: '/Company-landing',
    name: 'Company-landing',
    component: () => import('../views/Company-landing.vue')
  },
  {
    path: '/Picture-gallery',
    name: 'Picture-gallery',
    component: () => import('../views/Picture-gallery.vue')
  },
  {
    path: '/Money-converter',
    name: 'Money-converter',
    component: () => import('../views/Money-converter.vue')
  },
  {
    path: '/Website-registration',
    name: 'Website-registration',
    component: () => import('../views/Website-registration.vue')
  },
  {
    path: '/Website-questionnaire',
    name: 'Website-questionnaire',
    component: () => import('../views/Website-questionnaire.vue')
  },
  {
    path: '/Contact-list',
    name: 'Contact-list',
    component: () => import('../views/Contact-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
