import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  quotation: false,
  quotations: false
};

const getters = {
  GET_QUOTATION({ quotation }) {
    return quotation;
  },
  GET_ALL({ quotations }) {
    return quotations;
  }
};

const actions = {
  SELECTED_QUOTATION({ commit }, quotation) {
    commit('QUOTATION_RECEIVE', quotation)
  },
  async FETCH_QUOTATION({ commit }, id) {
    const response = await api.get(`api/quotations/${id}`);
    commit('QUOTATION_RECEIVE', response.data);
  },
  async FETCH_ALL_QUOTATIONS({ commit }) {
    const response = await api.get(`api/quotations`);
    commit('ALL_RECEIVE', response.data);
  },
  async CREATE_QUOTATION({ commit }, quotation) {
    const { data, ok } = await api.post('api/quotations', quotation);
    commit('QUOTATION_RECEIVE', data);
    return { data, ok }
  },
  async UPDATE_QUOTATION({ commit }, { id, quotation }) {
    const { data, ok } = await api.put(`api/quotations/${id}`, quotation);
    commit('QUOTATION_RECEIVE', data)
    return { data, ok }
  },
  async DELETE_QUOTATION({ commit }, id) {
    const response = await api.delete(`api/quotations/${id}`);
    commit('CLEAR_QUOTATION')
    return { response }
  }
};

const mutations = {
  QUOTATION_RECEIVE(state, quotation) {
    state.quotation = quotation;
  },
  ALL_RECEIVE(state, quotations) {
    state.quotations = quotations;
  },
  CLEAR_QUOTATION(state) {
    state.quotation = false;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
