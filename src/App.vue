<template>
  <div id="app">
    <vue-progress-bar/>

    <navbar v-if="$route.name != 'Login'"></navbar>

    <router-view/>

    <footer class="footer py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0">
              @2018 <strong>Grupo PWR</strong> Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import Navbar from "@/components/partials/Navbar"

  export default {
    name: 'App',

    components: {
      Navbar
    },

    computed: {
      ...mapGetters({
        loggedin: "auth/LOGGED_IN"
      })
    }
  }
</script>

<style>
  #app {
    position: relative;
    min-height: 100%;
    padding-bottom: 58px;
  }
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
