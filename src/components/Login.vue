<template>
  <div class="container">
    <div class="row align-items-center h-100">
      <div class="col-8 offset-2 col-md-6 offset-md-3">
        <h2 class="text-center my-4">Zodiac</h2>

        <div class="card shadow-none">
          <div class="card-body">
            <form  class="form">
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Email" required autofocus>
              </div>

              <div class="form-group">
                <label for="password">Senha</label>
                <input v-model="user.password" type="password" id="password" class="form-control" placeholder="Senha" required>
              </div>

              <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="loginUser(user)">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'Login',
    data () {
      return {
        user: {
          email: "",
          password: ""
        }
      }
    },

    methods: {
      ...mapActions({
        login: "auth/LOGIN"
      }),

      async loginUser(user) {
        // const response = await this.login(user);
        // if (this.loggedin) {
        //   this.$router.push("/servicos/");
        // }
        this.$router.push("/servicos/");
      },
    },

    computed: {
      ...mapGetters({
        loggedin: "auth/LOGGED_IN",
        messageStatus: "auth/GET_MESSAGE"
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: calc(100vh - 58px);
  }
</style>
