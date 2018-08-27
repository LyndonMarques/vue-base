import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'
import IsLoggedIn from './guards/IsLoggedIn'
import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn'

import Login from '@/components/Login'
import Services from '@/components/Services'
import Sponsorship from '@/components/Sponsorship'
import Contact from '@/components/Contact'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      // beforeEnter: RedirectIfLoggedIn
    },
    {
      path: '/servicos/',
      component: Services,
      // beforeEnter: IsLoggedIn,
      children: [
        {
          path: 'patrocinio',
          component: Sponsorship
        },
      ]
    },
    {
      path: '/contato/',
      component: Contact,
      // beforeEnter: IsLoggedIn,
    }
  ]
})

router.beforeEach(AppInit)

export default router
