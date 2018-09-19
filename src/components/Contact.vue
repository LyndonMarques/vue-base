<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Contato</h2>
          <p>
            Utilize o formulário abaixo para entrar em contato com nossa equipe.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form>
            <div class="row mb-3">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="contact[subject]">Assunto</label>
                  <input v-model="contact.subject" type="text" class="form-control" name="contact[subject]" placeholder="Assunto da mensagem">
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="contact[message]">Mensagem</label>
                  <textarea v-model="contact.message" rows="5" class="form-control" name="contact[message]" placeholder="Conteúdo da mensagem" />
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6 text-center">
                <button type="submit" class="btn btn-primary btn-lg" @click.prevent="sendContact()">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex"

  export default {
    name: 'Contact',
    components: {},
    data () {
      return {
        contact: {
          subject: '',
          message: ''
        }
      }
    },

    async mounted () {
      this.contact.id = this.currentUser.id
    },

    methods: {
      ...mapActions({
        createContact: "contact/CREATE_CONTACT"
      }),

      async sendContact() {
        const { data, ok } = await this.createContact(this.contact);
        if (ok) {
          this.$router.push("/");
          this.$toasted.success('Mensagem enviada com sucesso', {
            duration: 2000,
            position: 'bottom-right'
          })
        } else {
          this.$toasted.error('Ocorreu um erro', {
            duration: 2000,
            position: 'bottom-right'
          })
        }
      },
    },

    computed: {
      ...mapGetters({
        currentUser: "user/GET_USER"
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
