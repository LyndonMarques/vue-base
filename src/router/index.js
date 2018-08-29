import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'
import IsLoggedIn from './guards/IsLoggedIn'
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn'

import Login from '@/components/Login'

import ServicesIndex from '@/components/services/Index'
import ServicesList from '@/components/services/List'
import ServicesSponsorship from '@/components/services/Sponsorship'

import Report from '@/components/Report'
import Contact from '@/components/Contact'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: RedirectIfLoggedIn
    },
    {
      path: '/servicos/',
      component: ServicesIndex,
      beforeEnter: IsLoggedIn,
      children: [
        {
          path: '',
          component: ServicesList
        },
        {
          path: 'patrocinio',
          component: ServicesSponsorship
        },
      ]
    },
    {
      path: '/relatorios/',
      component: Report,
      beforeEnter: IsLoggedIn,
    },
    {
      path: '/contato/',
      component: Contact,
      beforeEnter: IsLoggedIn,
    }
  ],
  linkActiveClass: "active"
})

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  router
})

router.beforeEach(AppInit)

export default router
