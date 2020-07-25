import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/loadpage',
    name: 'LoadPage',
    component: () => import('../components/LoadPage.vue')
  },{
    path: '/header',
    name: 'Header',
    component: () => import('../components/Header.vue')
  }, {
    path: '/aboutme',
    name: 'AboutMe',
    component: () => import('../components/AboutMe.vue')
  }, {
    path: '/portafolio',
    name: 'Portafolio',
    component: () => import('../components/Portafolio.vue')
  }, {
    path: '/skills',
    name: 'Skills',
    component: () => import('../components/Skills.vue')
  }, {
    path: '/contactme',
    name: 'ContactMe',
    component: () => import('../components/ContactMe.vue')
  }, {
    path: '/footer',
    name: 'Footer',
    component: () => import('../components/Footer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
