<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 pb-5">
          <h1>
            <span></span>
          </h1>
        </div>
      </div>

      <div class="row justify-content-center">
        <div v-if="isSponsorship" class="col-12 col-sm-6 col-lg-4">
          <div class="card card-service shadow-none">
            <img class="card-img-top" src="../../assets/img/sponsorship.png" alt="Patrocínio">

            <div class="card-body">
              <div class="card-icon">
                <i class="icon icon-sponsorship"></i>
              </div>

              <h5 class="card-title">Patrocínio</h5>
              <p class="card-text">Neste campo você irá acessar o pedido de Patrocínio.

                Após o envio do formulário nossa equipe responderá em

                Até 5 dias úteis.</p>

              <router-link class="btn btn-white" to="/servicos/patrocinio">Solicitar orçamento</router-link>
            </div>
          </div>
        </div>

        <div v-if="isConference" class="col-12 col-sm-6 col-lg-4">
          <div class="card card-service shadow-none">
            <img class="card-img-top" src="../../assets/img/event.png" alt="Congressos/Eventos">

            <div class="card-body">
              <div class="card-icon">
                <i class="icon icon-event"></i>
              </div>

              <h5 class="card-title">Congressos/Eventos</h5>
              <p class="card-text">Neste campo você irá acessar o pedido de Congressos/Eventos.

                Após o envio do formulário nossa equipe responderá com a maior brevidade

                Possível , dependendo da complexibilidade da solicitação.</p>

              <router-link class="btn btn-white" to="/servicos/conferencia">Solicitar orçamento</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: 'ServicesList',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isSponsorship: "auth/IS_SPONSORSHIP",
      isConference: "auth/IS_CONFERENCE"
    })
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
