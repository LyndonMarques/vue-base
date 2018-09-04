import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  contact: false,
  contacts: false
};

const getters = {
  GET_CONTACT({ contact }) {
    return contact;
  },
  GET_ALL({ contacts }) {
    return contacts;
  }
};

const actions = {
  SELECTED_CONTACT({ commit }, contact) {
    commit('CONTACT_RECEIVE', contact)
  },
  async FETCH_CONTACT({ commit }, id) {
    const response = await api.get(`api/contacts/${id}`);
    commit('CONTACT_RECEIVE', response.data);
  },
  async FETCH_ALL_CONTACTS({ commit }) {
    const response = await api.get(`api/contacts`);
    commit('ALL_RECEIVE', response.data);
  },
  async CREATE_CONTACT({ commit }, contact) {
    const { data, ok } = await api.post('api/contacts', contact);
    commit('CONTACT_RECEIVE', data);
    return { data, ok }
  },
  async UPDATE_CONTACT({ commit }, { id, contact }) {
    const { data, ok } = await api.put(`api/contacts/${id}`, contact);
    commit('CONTACT_RECEIVE', data)
    return { data, ok }
  },
  async DELETE_CONTACT({ commit }, id) {
    const response = await api.delete(`api/contacts/${id}`);
    commit('CLEAR_CONTACT')
    return { response }
  }
};

const mutations = {
  CONTACT_RECEIVE(state, contact) {
    state.contact = contact;
  },
  ALL_RECEIVE(state, contacts) {
    state.contacts = contacts;
  },
  CLEAR_CONTACT(state) {
    state.contact = false;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
