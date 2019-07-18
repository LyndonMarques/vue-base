import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'
import IsLoggedIn from './guards/IsLoggedIn'
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn'
import RedirectHome from './guards/RedirectHome'

import Login from '@/pages/Login'
import Home from '@/pages/Home'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: RedirectIfLoggedIn,
      meta: { bodyClass: 'login' },
    },
    {
      path: '/home/',
      name: 'Home',
      component: Home,
      beforeEnter: IsLoggedIn
    },
  ],
  linkActiveClass: "active"
})

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  router
})

import vbclass from 'vue-body-class'
Vue.use( vbclass, router )

router.beforeEach(AppInit)

export default router
