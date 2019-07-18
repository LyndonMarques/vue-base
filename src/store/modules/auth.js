import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  loggedin: false,
  token: false,
  roles: false
};

const getters = {
  GET_ROLES({ roles }) {
    return roles
  },

  LOGGED_IN({ loggedin }) {
    return loggedin;
  },

  GET_ACCESS_TOKEN({ token }) {
    return token;
  },

  AUTH(state) {
    return state;
  },
};

const actions = {
  async LOGIN({ commit, dispatch }, credentials) {
    const response = await api.post('api/auth/', credentials);
    const { data, ok } = response;

    if (ok) {
      commit('SET_ACCESS_TOKEN', data.token);
      await dispatch('AUTHENTICATE');
    } else {
      commit('SET_LOGGED_IN', false);
    }
    return response
  },

  async AUTHENTICATE({ commit, dispatch, state }) {
    const response = await api.get('api/user/');
    const { data, ok } = response;
console.log(data)
    if (ok) {
      if (data.status == "Token is Expired") {
        dispatch('LOGOUT');
      } else {
        commit('SET_LOGGED_IN', true);
        commit('user/SET_USER', data.user, { root: true });
        commit('SET_ROLES', data.roles);
      }
    }
  },

  async REFRESH_TOKEN({ commit }, token) {
    const response = await api.post('refresh/', { token });
    const { data, ok } = response;

    if (ok) {
      commit('SET_ACCESS_TOKEN', data.token);
    } else {
      commit('SET_LOGGED_IN', false);
      commit('user/SET_USER', false, { root: true });
      commit('CLEAR_ACCESS_TOKEN', false);
    }
  },

  // FIXME: Redirect to login page after
  async LOGOUT({ commit }) {
     await api.post('api/logout/');
    commit('SET_LOGGED_IN', false);
    commit('user/SET_USER', false, { root: true });
    commit('SET_ROLES', false);
    commit('CLEAR_ACCESS_TOKEN', false);
  },
};

const mutations = {
  SET_ROLES(state, roles) {
    state.roles = roles;
  },

  SET_ACCESS_TOKEN(state, token) {
    localStorage.setItem('accessToken', token);
    state.token = token;
    api.setHeader('Authorization', `Bearer ${token}`);
  },

  CLEAR_ACCESS_TOKEN(state) {
    localStorage.removeItem('accessToken');
    state.token = false;
    api.setHeader('Authorization', '');
  },

  SET_LOGGED_IN(state, status) {
    state.loggedin = status;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations
};
