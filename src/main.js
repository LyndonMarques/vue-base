// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import styles
import '@/assets/sass/app.scss'

// import scripts
import 'jquery'
import 'bootstrap'


// Vue Progress Bar
import VueProgressBar from 'vue-progressbar'
const progressBarOptions = {
  color: '#007bff',
  thickness: '4px'
}
Vue.use(VueProgressBar, progressBarOptions)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
