<template>
  <div class="wrapper">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1>
            <span>
              Patrocínio
            </span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form>
            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Dados do Evento</h3>
              </div>

              <div class="col-12 col-md-6">
                <p class="mb-2">Tipo de patrocínio:</p>
                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.sponsorship_type" class="form-check-input" id="onco" value="onco">
                  <label class="form-radio-label" for="onco">
                    Onco
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.sponsorship_type" class="form-check-input" id="farma" value="farma">
                  <label class="form-radio-label" for="farma">
                    Farma
                  </label>
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Evento/Congresso</label>
                  <input type="text" class="form-control" name="event[name]" v-model="fields.event.name" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Tipo de Viagem</label>
                  <input type="text" class="form-control" name="event[type]" v-model="fields.event.type" placeholder="Tipo da viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de ida</label>
                  <input type="text" class="form-control" name="event[departure_date]" v-model="fields.event.departure_date" placeholder="Data do inicio da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de Retorno</label>
                  <input type="text" class="form-control" name="event[return_date]" v-model="fields.event.return_date" placeholder="Data de retorno da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Solicitante</label>
                  <input type="text" class="form-control" name="event[requester]" v-model="fields.event.requester" placeholder="Nome solicitante">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[gd]">GD</label>
                  <input type="text" class="form-control" name="event[gd]" v-model="fields.event.gd" placeholder="Lorem ipsum dolor sit">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[product]">Produto</label>
                  <input type="text" class="form-control" name="event[product]" v-model="fields.event.product" placeholder="Nome do Produto Patrocinador">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[guest_segmentation]">Segmentação</label>
                  <input type="text" class="form-control" name="event[guest_segmentation]" v-model="fields.event.guest_segmentation" placeholder="Segmentação do Convidado">
                </div>
              </div>
            </div>


            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Dados do Convidado</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[name]">Nome do Convidado</label>
                  <input type="text" class="form-control" name="guest[name]" v-model="fields.guest.name" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[crm]">CRM</label>
                  <input type="text" class="form-control" name="guest[crm]" v-model="fields.guest.crm" placeholder="CRM do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[cpf]">CPF</label>
                  <input type="text" class="form-control" name="guest[cpf]" v-model="fields.guest.rg" placeholder="CPF do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[rg]">RG</label>
                  <input type="text" class="form-control" name="guest[rg]" v-model="fields.guest.rg" placeholder="RG do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[birthdate]">Data de Nascimento</label>
                  <input type="text" class="form-control" name="guest[birthdate]" v-model="fields.guest.birthdate" placeholder="Data de Nascimento do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[nametag]">Crachá</label>
                  <input type="text" class="form-control" name="guest[nametag]" v-model="fields.guest.nametag" placeholder="Nome para o Crachá">
                </div>
              </div>

              <template v-if="fields.sponsorship_type == 'onco'">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label for="guest[partner_number]">Instituição</label>
                    <input type="text" class="form-control" name="guest[partner_number]" v-model="fields.guest.partner_number" placeholder="Instituição que o médico trabalha">
                  </div>
                </div>
              </template>

              <template v-if="fields.sponsorship_type == 'farma'">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label for="guest[partner_number]">Sociedade</label>
                    <input type="text" class="form-control" name="guest[partner_number]" v-model="fields.guest.partner_number" placeholder="Sociedade e nro. do Sócio">
                  </div>
                </div>
              </template>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[expertise]">Especialidade</label>
                  <input type="text" class="form-control" name="guest[expertise]" v-model="fields.guest.expertise" placeholder="Especialidade do médico">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[institution]">Instituição</label>
                  <input type="text" class="form-control" name="guest[institution]" v-model="fields.guest.institution" placeholder="Instituição do médico">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[cellphone]">Telefone Celular</label>
                  <input type="text" class="form-control" name="guest[cellphone]" v-model="fields.guest.cellphone" placeholder="Telefone Celular do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[phone]">Telefone Comercial</label>
                  <input type="text" class="form-control" name="guest[phone]" v-model="fields.guest.phone" placeholder="Telefone Comercial do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[email]">E-mail</label>
                  <input type="text" class="form-control" name="guest[email]" v-model="fields.guest.email" placeholder="Email do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[address]">Endereço</label>
                  <input type="text" class="form-control" name="guest[address]" v-model="fields.guest.address" placeholder="Endereço Completo">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Patrocínio</h3>
              </div>

              <div class="col-12">
                <p>Selecione os ítens a serem orçados</p>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="fields.quoted_items.registration" class="form-check-input" id="registration">
                  <label class="form-check-label" for="registration">
                    Inscrição
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="fields.quoted_items.accommodation" class="form-check-input" id="accommodation">
                  <label class="form-check-label" for="accommodation">
                    Hospedagem
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="fields.quoted_items.airfare" class="form-check-input" id="airfare">
                  <label class="form-check-label" for="airfare">
                    Aéreo
                  </label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg" @click.prevent="sendQuotation()">
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
    name: 'ServicesSponsorship',
    components: {},
    data () {
      return {
        fields: {
          type: 'sponsorship',
          sponsorship_type: '',
          event: {
            name: '',
            type: '',
            departure_date: '',
            return_date: '',
            requester: '',
            gd: '',
            product: '',
            guest_segmentation: ''
          },
          guest: {
            name: '',
            crm: '',
            cpf: '',
            rg: '',
            passport: '',
            birthdate: '',
            nametag: '',
            partner_number: '',
            expertise: '',
            institution: '',
            cellphone: '',
            phone: '',
            email: '',
            address: ''
          },
          quoted_items: {
            registration: false,
            accommodation: false,
            airfare: false
          }
        }
      }
    },

    methods: {
      ...mapActions({
        createQuotation: "quotation/CREATE_QUOTATION"
      }),

      async sendQuotation() {
        const { data, ok } = await this.createQuotation({id: this.currentUser.id, fields: this.fields});
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
