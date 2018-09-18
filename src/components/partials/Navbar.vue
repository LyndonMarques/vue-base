<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-md sticky-top">
          <a class="navbar-brand" href="/home/">
            <img src="../../assets/img/logo-small.png" alt="Zodiac">
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse">
            <ul class="navbar-nav text-center">
              <li v-if="roles && (roles.includes('trade') || roles.includes('admin'))" class="nav-item px-3">
                <router-link class="nav-link" to="/servicos">Serviços</router-link>
              </li>
              <li v-if="roles && (roles.includes('financial') || roles.includes('admin'))" class="nav-item px-3">
                <router-link class="nav-link" to="/relatorios">Relatorios</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link class="nav-link" to="/contato">Contato</router-link>
              </li>
              <li class="nav-item px-3">
                <a href="#" class="nav-link" @click="logoutUser">
                  <i class="icon icon-logout"></i>
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex"
  import { routes } from "@/router"

  export default {
    name: 'Navbar',
    components: {},
    data () {
      return {
      }
    },

    mounted () {
    },

    methods: {
      ...mapActions({
        logout: "auth/LOGOUT"
      }),

      async logoutUser() {
        await this.logout();
        this.$router.push('/');
      }
    },

    computed: {
      ...mapGetters({
        loggedin: "auth/LOGGED_IN",
        currentUser: "user/GET_USER",
        roles: "auth/GET_ROLES"
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
