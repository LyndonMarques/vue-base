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
                <h2>Dados do Evento</h2>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Evento/Congresso</label>
                  <input type="text" class="form-control" name="event[name]" v-model="sponsorship.event.name" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Tipo de Viagem</label>
                  <input type="text" class="form-control" name="event[type]" v-model="sponsorship.event.type" placeholder="Tipo da viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de ida</label>
                  <input type="text" class="form-control" name="event[departure_date]" v-model="sponsorship.event.departure_date" placeholder="Data do inicio da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Data de Retorno</label>
                  <input type="text" class="form-control" name="event[return_date]" v-model="sponsorship.event.return_date" placeholder="Data de retorno da Viagem">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[name]">Solicitante</label>
                  <input type="text" class="form-control" name="event[requester]" v-model="sponsorship.event.requester" placeholder="Nome solicitante">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[gd]">GD</label>
                  <input type="text" class="form-control" name="event[gd]" v-model="sponsorship.event.gd" placeholder="Lorem ipsum dolor sit">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[product]">Produto</label>
                  <input type="text" class="form-control" name="event[product]" v-model="sponsorship.event.product" placeholder="Nome do Produto Patrocinador">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[guest_segmentation]">Segmentação</label>
                  <input type="text" class="form-control" name="event[guest_segmentation]" v-model="sponsorship.event.guest_segmentation" placeholder="Segmentação do Convidado">
                </div>
              </div>
            </div>


            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h2>Dados do Convidado</h2>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[name]">Nome do Convidado</label>
                  <input type="text" class="form-control" name="guest[name]" v-model="sponsorship.guest.name" placeholder="Nome do Evento ou Congresso">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[crm]">CRM</label>
                  <input type="text" class="form-control" name="guest[crm]" v-model="sponsorship.guest.crm" placeholder="CRM do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[cpf]">CPF</label>
                  <input type="text" class="form-control" name="guest[cpf]" v-model="sponsorship.guest.rg" placeholder="CPF do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[rg]">RG</label>
                  <input type="text" class="form-control" name="guest[rg]" v-model="sponsorship.guest.rg" placeholder="RG do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[birthdate]">Data de Nascimento</label>
                  <input type="text" class="form-control" name="guest[birthdate]" v-model="sponsorship.guest.birthdate" placeholder="Data de Nascimento do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[nametag]">Crachá</label>
                  <input type="text" class="form-control" name="guest[nametag]" v-model="sponsorship.guest.nametag" placeholder="Nome para o Crachá">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[partner_number]">Sociedade</label>
                  <input type="text" class="form-control" name="guest[partner_number]" v-model="sponsorship.guest.partner_number" placeholder="Sociedade e nro. do Sócio">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[cellphone]">Telefone Celular</label>
                  <input type="text" class="form-control" name="guest[cellphone]" v-model="sponsorship.guest.cellphone" placeholder="Telefone Celular do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[phone]">Telefone Comercial</label>
                  <input type="text" class="form-control" name="guest[phone]" v-model="sponsorship.guest.phone" placeholder="Telefone Comercial do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[email]">E-mail</label>
                  <input type="text" class="form-control" name="guest[email]" v-model="sponsorship.guest.email" placeholder="Email do Convidado">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="guest[address]">Endereço</label>
                  <input type="text" class="form-control" name="guest[address]" v-model="sponsorship.guest.address" placeholder="Endereço Completo">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h2>Patrocínio</h2>
              </div>

              <div class="col-12">
                <p>Selecione os ítens a serem orçados</p>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="sponsorship.quoted_items.registration" class="form-check-input" id="registration">
                  <label class="form-check-label" for="registration">
                    Inscrição
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="sponsorship.quoted_items.accommodation" class="form-check-input" id="accommodation">
                  <label class="form-check-label" for="accommodation">
                    Hospedagem
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="sponsorship.quoted_items.airfare" class="form-check-input" id="airfare">
                  <label class="form-check-label" for="airfare">
                    Aéreo
                  </label>
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
    name: 'ServicesSponsorship',
    components: {},
    data () {
      return {
        sponsorship: {
          event: {
            name: 'Teste',
            type: 'teste',
            departure_date: '30/08/2018',
            return_date: '03/09/2018',
            requester: 'Lorem ipsum',
            gd: 'GD',
            product: 'Produto 1',
            guest_segmentation: 'Segmento 1'
          },
          guest: {
            name: 'Fulano de tal',
            crm: '000000',
            cpf: '000.000.000.00',
            rg: '00.000.000-00',
            birthdate: '18/02/1992',
            nametag: 'Sr. Fulano',
            partner_number: '(11) 0000-0000',
            cellphone: '(11) 00000-0000',
            phone: '(11) 0000-0000',
            email: 'fulano@teste.com',
            address: 'Rua Tal número 6'
          },
          quoted_items: {
            registration: true,
            accommodation: true,
            airfare: true
          }
        }
      }
    },

    mounted () {
      this.sponsorship.id = this.currentUser.id
    },

    methods: {
      ...mapActions({
        createQuotation: "quotation/CREATE_QUOTATION"
      }),

      async sendQuotation() {
        const { data, ok } = await this.createQuotation(this.sponsorship);
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
