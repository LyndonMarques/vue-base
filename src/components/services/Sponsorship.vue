<template>
  <div class="wrapper">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 mb-3">
          <h1>
            <span>
              Patrocínio
            </span>
          </h1>

          <p class="text-center">
            Preencha todos os campos abaixo para enviar o orçamento (os campos marcados com * são obrigatórios)
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

              <div class="col-12 col-md-6 mb-2">
                <p class="mb-2">Tipo de patrocínio*</p>
                <div class="form-check form-check-inline">
                  <input type="radio" v-model="sponsorship_fields.sponsorship_type" v-validate="'required'" class="form-check-input" id="onco" value="onco" name="event[sponsorship_type]">
                  <label class="form-radio-label" for="onco">
                    Onco
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="radio" v-model="sponsorship_fields.sponsorship_type" v-validate="'required'" class="form-check-input" id="farma" value="farma" name="event[sponsorship_type]">
                  <label class="form-radio-label" for="farma">
                    Farma
                  </label>
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Evento/Congresso*</label>
                  <input type="text" class="form-control" name="event[name]" v-model="sponsorship_fields.event.name" v-validate="'required'" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Tipo de Viagem</label>
                  <input type="text" class="form-control" name="event[type]" v-model="sponsorship_fields.event.type" placeholder="Tipo da viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de ida*</label>
                  <input type="text" class="form-control" name="event[departure_date]" v-model="sponsorship_fields.event.departure_date" v-validate="'required|length:10'" v-mask="'##/##/####'" placeholder="Data do inicio da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de Retorno*</label>
                  <input type="text" class="form-control" name="event[return_date]" v-model="sponsorship_fields.event.return_date" v-validate="'required|length:10'" v-mask="'##/##/####'" placeholder="Data de retorno da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Solicitante*</label>
                  <input type="text" class="form-control" name="event[requester]" v-model="sponsorship_fields.event.requester" v-validate="'required'" placeholder="Nome solicitante">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[gd]">GD</label>
                  <input type="text" class="form-control" name="event[gd]" v-model="sponsorship_fields.event.gd" placeholder="Gerente Distrital">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[product]">Produto</label>
                  <input type="text" class="form-control" name="event[product]" v-model="sponsorship_fields.event.product" placeholder="Nome do Produto Patrocinador">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[guest_segmentation]">Segmentação</label>
                  <input type="text" class="form-control" name="event[guest_segmentation]" v-model="sponsorship_fields.event.guest_segmentation" placeholder="Segmentação do Convidado">
                </div>
              </div>
            </div>


            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Dados do Convidado</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[name]">Nome do Convidado*</label>
                  <input type="text" class="form-control" name="guest[name]" v-model="sponsorship_fields.guest.name" v-validate="'required'" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[crm]">CRM*</label>
                  <input type="text" class="form-control" name="guest[crm]" v-model="sponsorship_fields.guest.crm" v-validate="'required'" placeholder="CRM do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[cpf]">CPF</label>
                  <input type="text" class="form-control" name="guest[cpf]" v-model="sponsorship_fields.guest.cpf" v-validate="'length:14'" v-mask="'###.###.###-##'" placeholder="CPF do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[rg]">RG</label>
                  <input type="text" class="form-control" name="guest[rg]" v-model="sponsorship_fields.guest.rg" placeholder="RG do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[birthdate]">Data de Nascimento</label>
                  <input type="text" class="form-control" name="guest[birthdate]" v-model="sponsorship_fields.guest.birthdate" v-mask="'##/##/####'" placeholder="Data de Nascimento do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[nametag]">Crachá</label>
                  <input type="text" class="form-control" name="guest[nametag]" v-model="sponsorship_fields.guest.nametag" placeholder="Nome para o Crachá">
                </div>
              </div>

              <template v-if="sponsorship_fields.sponsorship_type == 'onco'">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label for="guest[partner_number]">Instituição</label>
                    <input type="text" class="form-control" name="guest[partner_number]" v-model="sponsorship_fields.guest.partner_number" placeholder="Instituição que o médico trabalha">
                  </div>
                </div>
              </template>

              <template v-if="sponsorship_fields.sponsorship_type == 'farma'">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label for="guest[partner_number]">Sociedade</label>
                    <input type="text" class="form-control" name="guest[partner_number]" v-model="sponsorship_fields.guest.partner_number" placeholder="Sociedade e nro. do Sócio">
                  </div>
                </div>
              </template>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[expertise]">Especialidade</label>
                  <input type="text" class="form-control" name="guest[expertise]" v-model="sponsorship_fields.guest.expertise" placeholder="Especialidade do médico">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[institution]">Instituição</label>
                  <input type="text" class="form-control" name="guest[institution]" v-model="sponsorship_fields.guest.institution" placeholder="Instituição do médico">
                </div>
              </div>

              <div class="col-6 col-md-3">
                <div class="form-group">
                  <label for="guest[cellphone]">Telefone Celular</label>
                  <input type="text" class="form-control" name="guest[cellphone]" v-model="sponsorship_fields.guest.cellphone" v-validate="'required'" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="Tel. Celular do Convidado">
                </div>
              </div>

              <div class="col-6 col-md-3">
                <div class="form-group">
                  <label for="guest[phone]">Telefone Comercial</label>
                  <input type="text" class="form-control" name="guest[phone]" v-model="sponsorship_fields.guest.phone" v-validate="'required'" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="Tel. Comercial do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[email]">E-mail</label>
                  <input type="text" class="form-control" name="guest[email]" v-model="sponsorship_fields.guest.email" v-validate="'required|email'" placeholder="Email do Convidado">
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div class="form-group">
                  <label for="guest[address]">Endereço</label>
                  <input type="text" class="form-control" name="guest[address]" v-model="sponsorship_fields.guest.address" v-validate="'required'" placeholder="Endereço Completo">
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div class="form-group">
                  <label for="guest[city]">Cidade</label>
                  <input type="text" class="form-control" name="guest[city]" v-model="sponsorship_fields.guest.city" v-validate="'required'" placeholder="Cidade">
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="form-group">
                  <label for="guest[state]">UF</label>
                  <input type="text" class="form-control" name="guest[state]" v-model="sponsorship_fields.guest.state" v-validate="'required'" v-mask="'AA'" placeholder="UF">
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="form-group">
                  <label for="guest[zipcode]">CEP</label>
                  <input type="text" class="form-control" name="guest[zipcode]" v-model="sponsorship_fields.guest.zipcode" v-validate="'required'" v-mask="'#####-###'" placeholder="CEP">
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
                  <input type="checkbox" v-model="sponsorship_fields.quoted_items.registration" class="form-check-input" id="registration">
                  <label class="form-check-label" for="registration">
                    Inscrição
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="sponsorship_fields.quoted_items.accommodation" class="form-check-input" id="accommodation">
                  <label class="form-check-label" for="accommodation">
                    Hospedagem
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="sponsorship_fields.quoted_items.airfare" class="form-check-input" id="airfare">
                  <label class="form-check-label" for="airfare">
                    Aéreo
                  </label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg" @click.prevent="submitForm()">
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

  import { mask } from 'vue-the-mask'

  export default {
    name: 'ServicesSponsorship',
    components: {},
    directives: {mask},
    data () {
      return {
        sponsorship_fields: {
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
            address: '',
            city: '',
            state: '',
            zipcode: ''
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

      submitForm() {

        this.$validator.validateAll().then((result) => {
          if (result == true) {
            this.sendQuotation()
          }
        })
      },

      async sendQuotation() {
        const { data, ok } = await this.createQuotation({id: this.currentUser.id, fields: this.sponsorship_fields});
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
