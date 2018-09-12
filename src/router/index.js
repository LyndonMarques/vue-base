import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'
import IsLoggedIn from './guards/IsLoggedIn'
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn'
import RedirectHome from './guards/RedirectHome'
import RedirectRole from './guards/RedirectRole'

import Login from '@/components/Login'
import Home from '@/components/Home'

import ServicesIndex from '@/components/services/Index'
import ServicesList from '@/components/services/List'
import ServicesSponsorship from '@/components/services/Sponsorship'
import ServicesConference from '@/components/services/Conference'

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
      path: '/home/',
      name: 'Home',
      component: Home,
      beforeEnter: RedirectHome
    },
    {
      path: '/servicos/',
      component: ServicesIndex,
      beforeEnter: RedirectRole,
      meta: { trade: true },
      children: [
        {
          path: '',
          component: ServicesList,
          meta: { trade: true }
        },
        {
          path: 'patrocinio',
          component: ServicesSponsorship,
          meta: { trade: true }
        },
        {
          path: 'conferencia',
          component: ServicesConference,
          meta: { trade: true }
        },
      ]
    },
    {
      path: '/relatorios/',
      component: Report,
      beforeEnter: RedirectRole,
      meta: { financial: true }
    },
    {
      path: '/contato/',
      component: Contact,
      beforeEnter: IsLoggedIn
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
