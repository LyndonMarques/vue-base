<template>
  <div class="wrapper">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1>
            <i class="fa fa-gift fa-1x" aria-hidden="true"></i>
            Patrocínio
          </h1>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form>
            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h2>Cliente</h2>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[name]">Nome do Cliente</label>
                  <input type="text" class="form-control" name="client[name]" v-model="fields.client.name" placeholder="Nome do Cliente">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[account_manager]">Gerente de contas</label>
                  <input type="text" class="form-control" name="client[account_manager]" v-model="fields.client.account_manager" placeholder="Nome do gerente de contas">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[contact_name]">Responsável</label>
                  <input type="text" class="form-control" name="client[contact_name]" v-model="fields.client.contact_name" placeholder="Nome do responsável para contato">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[contact_phone]">Telefone do Responsável</label>
                  <input type="text" class="form-control" name="client[contact_phone]" v-model="fields.client.contact_phone" placeholder="Telefone do responsável para contato">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 col-md-4 offset-md-4">
                <button type="submit" class="btn btn-primary btn-lg btn-block" @click.prevent="sendQuotation()">
                  Enviar Orçamento
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
    name: 'ServicesConference',
    data () {
      return {
        fields: {
          client: {
            name: '',
            account_manager: '',
            contact_name: '',
            contact_phone: '',
            contact_email: '',
            cost_center: '',
            sig: ''
          },
          general_info: {
            event_name: '',
            event_period: '',
            quantity_pax: '',
            quantity_staff: '',
            date_briefing: '',
            date_proposal: '',
            date_feedback: '',
            delivery_format: ''
          },
          previous_event: {
            local: '',
            period: '',
            observations: ''
          },
          attendees: {
            quantity: '',
            age_range: '',
            quantity_men: '',
            quantity_women: '',
            public_type: ''
          },
          event: {
            objective: '',
            suggestions: '',
            accommodations: {
              single: '',
              duble_single: '',
              double_couple: '',
              triple: '',
              passant: '',
              staff: ''
            },
            paid_expenses: '',
            meals: ''
          },
          room: {
            quantity: '',
            format: '',
            period: '',
            awards: '',
            observations: ''
          },
          equipament: {
            period: '',
            screen: {
              size: '',
              quantity: 0
            },
            projector: false,
            sound: false,
            technician: false,
            slider_control: false,
            microphone: false,
            wireless_microphone: false,
            stage: false,
            tribune: false,
            scenography: '',
            observations: ''
          },
          transfer: {
            airfare: false,
            start_time: '',
            end_time: '',
            transfer: false
          },
          activities: {
            attractions: '',
            decorations: '',
            furniture: '',
            theme: '',
            speaker: '',
            host: '',
            team_building: '',
            gifts: '',
            stand: '',
            miscellaneous: ''
          },
          budget: '',
          observations: ''
        }
      }
    },

    mounted () {
      this.fields.id = this.currentUser.id
    },

    methods: {
      ...mapActions({
        createQuotation: "quotation/CREATE_QUOTATION"
      }),

      async sendQuotation() {
        const { data, ok } = await this.createQuotation(this.fields);
        if (ok) {
          this.$router.push("/servicos/");
          this.$toasted.success('Orçamento enviado com sucesso', {
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
