<template>
  <div id="app">
    <vue-progress-bar/>
    <navbar/>
    <router-view/>
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
