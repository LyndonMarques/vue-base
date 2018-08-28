<template>
  <div class="wrapper">
    <div class="container py-5">
      <div class="row mb-3">
        <div class="col-12">
          <h1>Contato</h1>
          <p>
            Utilize o formulário abaixo para entrar em contato com nossa equipe.
          </p>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <form>
            <div class="row mb-3">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="contact[name]">Categoria</label>
                  <select v-model="contact.category" class="custom-select" placeholder="Selecionar">
                    <option value="sponsorship">Patrocínio</option>
                    <option value="event">Congressos/Eventos</option>
                    <option value="training">Treinamentos</option>
                    <option value="symposium">Simpósios</option>
                    <option value="mini_meeting">Mini Meetings</option>
                    <option value="visits">Visitas</option>
                  </select>
                </div>
              </div>

              <div class="w-100"></div>

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
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Contact',
    components: {},
    data () {
      return {
        contact: {
          category: "",
          subject: "",
          message: ""
        }
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
