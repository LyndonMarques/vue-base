<template>
  <div class="wrapper">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <h1>Serviços</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-gift fa-4x mb-4" aria-hidden="true"></i>

              <h5 class="card-title">Patrocínio</h5>
              <p class="card-text text-small">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <router-link class="btn btn-primary" to="/servicos/patrocinio">Solicitar Orçamento</router-link>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-handshake-o fa-4x mb-4 text-muted" aria-hidden="true"></i>

              <h5 class="card-title text-muted">Congressos/Eventos</h5>
              <p class="card-text text-small text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary disabled">Em breve</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-graduation-cap fa-4x mb-4 text-muted" aria-hidden="true"></i>

              <h5 class="card-title text-muted">Treinamentos</h5>
              <p class="card-text text-small text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary disabled">Em breve</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-stethoscope fa-4x mb-4 text-muted" aria-hidden="true"></i>

              <h5 class="card-title text-muted">Simpósios</h5>
              <p class="card-text text-small text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary disabled">Em breve</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-comments-o fa-4x mb-4 text-muted" aria-hidden="true"></i>

              <h5 class="card-title text-muted">Mini Meetings</h5>
              <p class="card-text text-small text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary disabled">Em breve</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 my-4">
          <div class="card shadow-none">
            <div class="card-body text-center">
              <i class="fa fa-plane fa-4x mb-4 text-muted" aria-hidden="true"></i>

              <h5 class="card-title text-muted">Visitas</h5>
              <p class="card-text text-small text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary disabled">Em breve</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ServicesList',
    components: {},
    data () {
      return {
      }
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
