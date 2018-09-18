import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  category: false,
  categories: false
};

const getters = {
  GET_CATEGORY({ category }) {
    return category;
  },
  GET_ALL({ categories }) {
    return categories;
  }
};

const actions = {
  SELECTED_CATEGORY({ commit }, category) {
    commit('CATEGORY_RECEIVE', category)
  },
  async FETCH_CATEGORY({ commit }, id) {
    const response = await api.get(`categories/${id}`);
    commit('CATEGORY_RECEIVE', response.data);
  },
  async FETCH_ALL_CATEGORIES({ commit }) {
    const response = await api.get(`categories`);
    commit('ALL_RECEIVE', response.data);
  },
  async CREATE_CATEGORY({ commit }, category) {
    const { data, ok } = await api.post('categories', category);
    commit('CATEGORY_RECEIVE', data);
    return { data, ok }
  },
  async UPDATE_CATEGORY({ commit }, { id, category }) {
    const { data, ok } = await api.put(`categories/${id}`, category);
    commit('CATEGORY_RECEIVE', data)
    return { data, ok }
  },
  async DELETE_CATEGORY({ commit }, id) {
    const response = await api.delete(`categories/${id}`);
    commit('CLEAR_CATEGORY')
    return { response }
  }
};

const mutations = {
  CATEGORY_RECEIVE(state, category) {
    state.category = category;
  },
  ALL_RECEIVE(state, categories) {
    state.categories = categories;
  },
  CLEAR_CATEGORY(state) {
    state.category = false;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
