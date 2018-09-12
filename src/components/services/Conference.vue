<template>
  <div class="wrapper">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1>
            <span>
              Congressos/Eventos
            </span>
          </h1>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form>
            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Cliente</h3>
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

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[contact_email]">Email do Responsável</label>
                  <input type="text" class="form-control" name="client[contact_email]" v-model="fields.client.contact_email" placeholder="Email do responsável para contato">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[cost_center]">Centro de Custos</label>
                  <input type="text" class="form-control" name="client[cost_center]" v-model="fields.client.cost_center" placeholder="Centro de Custos do responsável para contato">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="client[sig]">SIG do Responsável</label>
                  <input type="text" class="form-control" name="client[sig]" v-model="fields.client.sig" placeholder="SIG do responsável">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Informações Gerais</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[event_name]">Nome do Evento</label>
                  <input type="text" class="form-control" name="general_info[event_name]" v-model="fields.general_info.event_name" placeholder="Nome do Evento">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[event_period]">Período</label>
                  <input type="text" class="form-control" name="general_info[event_period]" v-model="fields.general_info.event_period" placeholder="Período do Evento">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[quantity_pax]">Participantes</label>
                  <input type="text" class="form-control" name="general_info[quantity_pax]" v-model="fields.general_info.quantity_pax" placeholder="Quantidade de participantes">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[quantity_staff]">Staffs Zodiac</label>
                  <input type="text" class="form-control" name="general_info[quantity_staff]" v-model="fields.general_info.quantity_staff" placeholder="Número de staffs Zodiac">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[date_briefing]">Data do Briefing</label>
                  <input type="text" class="form-control" name="general_info[date_briefing]" v-model="fields.general_info.date_briefing" placeholder="Data de solicitação do Briefing">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[date_proposal]">Entrega da Proposta</label>
                  <input type="text" class="form-control" name="general_info[date_proposal]" v-model="fields.general_info.date_proposal" placeholder="Data de entrega da Proposta">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="general_info[date_feedback]">Previsão de Retorno</label>
                  <input type="text" class="form-control" name="general_info[date_feedback]" v-model="fields.general_info.date_feedback" placeholder="Previsão de Retorno Zodiac">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <p>Formato de entrega</p>
                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.general_info.delivery_format" class="form-check-input" id="forecast" value="forecast">
                  <label class="form-radio-label" for="forecast">
                    Previsão de Custos
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.general_info.delivery_format" class="form-check-input" id="presentation" value="presentation">
                  <label class="form-radio-label" for="presentation">
                    Apresentação PPT
                  </label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Evento Anterior</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="previous_event[local]">Local do Evento</label>
                  <input type="text" class="form-control" name="previous_event[local]" v-model="fields.previous_event.local" placeholder="Local do Evento">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="previous_event[period]">Período do Evento</label>
                  <input type="text" class="form-control" name="previous_event[period]" v-model="fields.previous_event.period" placeholder="Período do Evento">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="previous_event[observations]">Observações</label>
                  <textarea v-model="fields.previous_event.observations" rows="3" class="form-control" name="previous_event[observations]" placeholder="Observações adicionais sobre o evento anterior" />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Sobre os Participantes</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="attendees[quantity]">Quantidade</label>
                  <input type="text" class="form-control" name="attendees[quantity]" v-model="fields.attendees.quantity" placeholder="Quantidade de Participantes">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="attendees[age_range]">Faixa Etária</label>
                  <input type="text" class="form-control" name="attendees[age_range]" v-model="fields.attendees.age_range" placeholder="Faixa Etária dos Participantes">
                </div>
              </div>

              <div class="col-6 col-md-3">
                <div class="form-group">
                  <label for="attendees[quantity_men]">Quantidade de Homens</label>
                  <input type="text" class="form-control" name="attendees[quantity_men]" v-model="fields.attendees.quantity_men" placeholder="Quantidade de Homens">
                </div>
              </div>

              <div class="col-6 col-md-3">
                <div class="form-group">
                  <label for="attendees[quantity_women]">Quantidade de Mulheres</label>
                  <input type="text" class="form-control" name="attendees[quantity_women]" v-model="fields.attendees.quantity_women" placeholder="Quantidade de Mulheres">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <p class="mb-2">Tipo de Público</p>
                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.attendees.public_type" class="form-check-input" id="contributors" value="contributors">
                  <label class="form-radio-label" for="contributors">
                    Colaboradores
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="radio" v-model="fields.attendees.public_type" class="form-check-input" id="medics" value="medics">
                  <label class="form-radio-label" for="medics">
                    Médicos
                  </label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Sobre o Evento</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="event[objective]">Objetivo</label>
                      <input type="text" class="form-control" name="event[objective]" v-model="fields.event.objective" placeholder="Objetivo do Evento">
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="event[suggestions]">Sugestões</label>
                      <textarea v-model="fields.event.suggestions" rows="3" class="form-control" name="event[suggestions]" placeholder="Sugestões de algum destino, hotel, espaço, restaurante, casa noturna, etc..." />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="row">
                  <div class="col-12">
                    <p class="mb-0">Acomodações (número de quartos)</p>

                    <div class="row">
                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][single]">Single</label>
                          <input type="text" class="form-control" name="event[accommodations][single]" v-model="fields.event.accommodations.single" placeholder="1 Cama">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][duble_single]">Duplo</label>
                          <input type="text" class="form-control" name="event[accommodations][duble_single]" v-model="fields.event.accommodations.duble_single" placeholder="2 Camas">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][double_couple]">Duplo</label>
                          <input type="text" class="form-control" name="event[accommodations][double_couple]" v-model="fields.event.accommodations.double_couple" placeholder="Casal">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][triple]">Triplo</label>
                          <input type="text" class="form-control" name="event[accommodations][triple]" v-model="fields.event.accommodations.triple" placeholder="3 Camas">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][passant]">Passantes</label>
                          <input type="text" class="form-control" name="event[accommodations][passant]" v-model="fields.event.accommodations.passant" placeholder="Passantes">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="event[accommodations][staff]">Staff</label>
                          <input type="text" class="form-control" name="event[accommodations][staff]" v-model="fields.event.accommodations.staff" placeholder="Staff Zodiac">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[paid_expenses]">Despesas pagas pela Zodiac</label>
                  <input type="text" class="form-control" name="event[paid_expenses]" v-model="fields.event.paid_expenses" placeholder="Frigobar, Lavanderia, RoomService, Bebidas Extras nas Refeições, etc...">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[meals]">A&B (Refeições)</label>
                  <input type="text" class="form-control" name="event[meals]" v-model="fields.event.meals" placeholder="Café da manhã, Coffee Break, Almoço, Jantar, Coquetel, Jantar Especial, etc...">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Sobre a Sala</h3>
              </div>

              <div class="col-12">
                <p class="mb-1">
                  Sala/Espaço (Auditório, Escolar, Espinha de Peixe, Mesa redonda, Mesa Única, etc).
                </p>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room[quantity]">Quantidade</label>
                  <input type="text" class="form-control" name="room[quantity]" v-model="fields.room.quantity" placeholder="Quantidade de Salas">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room[format]">Formato</label>
                  <input type="text" class="form-control" name="room[format]" v-model="fields.room.format" placeholder="Formato das Salas">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room[period]">Período</label>
                  <input type="text" class="form-control" name="room[period]" v-model="fields.room.period" placeholder="Período de Utilização">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room[awards]">Premação</label>
                  <input type="text" class="form-control" name="room[awards]" v-model="fields.room.awards" placeholder="Sala de Premação">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="room[observations]">Observações</label>
                  <textarea v-model="fields.room.observations" rows="3" class="form-control" name="room[observations]" placeholder="Observações sobre as salas" />
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12">
                <p class="mt-3 mb-1">Equipamentos</p>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="equipament[quantity]">Período</label>
                  <input type="text" class="form-control" name="equipament[quantity]" v-model="fields.equipament.quantity" placeholder="Período de Utilização">
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="row">
                  <div class="col-12">
                    <p class="mb-0">Telas</p>

                    <div class="row">
                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="equipament[screen][size]">Tamanho</label>
                          <input type="text" class="form-control" name="equipament[screen][size]" v-model="fields.equipament.screen.size" placeholder="Tamanho">
                        </div>
                      </div>

                      <div class="col-6 col-md-4">
                        <div class="form-group">
                          <label for="equipament[screen][quantity]">Quantidade</label>
                          <input type="text" class="form-control" name="equipament[screen][quantity]" v-model="fields.equipament.screen.quantity" placeholder="Quantidade">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <p class="mb-1">Outros Equipamentos</p>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.sound" id="sound">
                      <label class="form-check-label" for="sound">
                        Projetor
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.technician" id="technician">
                      <label class="form-check-label" for="technician">
                        Sonorização Completa
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.slider_control" id="slider_control">
                      <label class="form-check-label" for="slider_control">
                        Técnico
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.slider_control" id="slider_control">
                      <label class="form-check-label" for="slider_control">
                        Passador de Sliders
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.microphone" id="microphone">
                      <label class="form-check-label" for="microphone">
                        Microfone
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.wireless_microphone" id="wireless_microphone">
                      <label class="form-check-label" for="wireless_microphone">
                        Microfone Sem Fio
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.stage" id="stage">
                      <label class="form-check-label" for="stage">
                        Palco
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="fields.equipament.tribune" id="tribune">
                      <label class="form-check-label" for="tribune">
                        Tribuna
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="equipament[scenography]">Cenografia</label>
                      <input type="text" class="form-control" name="equipament[scenography]" v-model="fields.equipament.scenography" placeholder="Cenografia, Lona na estrutura de Box, etc...">
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="equipament[observations]">Observações</label>
                      <textarea v-model="fields.equipament.observations" rows="3" class="form-control" name="equipament[observations]" placeholder="Observações sobre os Equipamentos" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Deslocamento</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="fields.transfer.airfare" class="form-check-input" id="airfare">
                  <label class="form-check-label" for="airfare">
                    Necessidade de aéreo
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input type="checkbox" v-model="fields.transfer.transfer" class="form-check-input" id="transfer">
                  <label class="form-check-label" for="transfer">
                    Necessidade de transfer
                  </label>
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="transfer[start_time]">Chegada</label>
                  <input type="text" class="form-control" name="transfer[start_time]" v-model="fields.transfer.start_time" placeholder="Horário de Chegada para o Evento">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="transfer[end_time]">Período</label>
                  <input type="text" class="form-control" name="transfer[end_time]" v-model="fields.transfer.end_time" placeholder="Horário de Término do Evento">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Atividades/Diversos</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[attractions]">Atrações</label>
                  <input type="text" class="form-control" name="activities[attractions]" v-model="fields.activities.attractions" placeholder="Atrações">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[decorations]">Decoração</label>
                  <input type="text" class="form-control" name="activities[decorations]" v-model="fields.activities.decorations" placeholder="Decoração">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[furniture]">Mobiliário</label>
                  <input type="text" class="form-control" name="activities[furniture]" v-model="fields.activities.furniture" placeholder="Mobiliário">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[theme]">Tema</label>
                  <input type="text" class="form-control" name="activities[theme]" v-model="fields.activities.theme" placeholder="Tema">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[speaker]">Palestrante</label>
                  <input type="text" class="form-control" name="activities[speaker]" v-model="fields.activities.speaker" placeholder="Palestrante">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[host]">Mestre de cerimônia</label>
                  <input type="text" class="form-control" name="activities[host]" v-model="fields.activities.host" placeholder="Mestre de cerimônia">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[team_building]">Team Building</label>
                  <input type="text" class="form-control" name="activities[team_building]" v-model="fields.activities.team_building" placeholder="Team Building">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[gifts]">Brindes</label>
                  <input type="text" class="form-control" name="activities[gifts]" v-model="fields.activities.gifts" placeholder="Brindes">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[stand]">Stand</label>
                  <input type="text" class="form-control" name="activities[stand]" v-model="fields.activities.stand" placeholder="Necessidade de Stand">
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="activities[miscellaneous]">Diversos</label>
                  <input type="text" class="form-control" name="activities[miscellaneous]" v-model="fields.activities.miscellaneous" placeholder="Diversos">
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12 mb-2">
                <h3>Investimento</h3>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[budget]">Budget</label>
                  <input type="text" class="form-control" name="event[budget]" v-model="fields.budget" placeholder="Verba Total/Bugdet">
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="event[observations]">Outras Informações</label>
                  <textarea v-model="fields.observations" rows="3" class="form-control" name="event[observations]" placeholder="Outras Informações" />
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
