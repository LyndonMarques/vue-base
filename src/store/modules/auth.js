import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  loggedin: false,
  message: '',
  token: false,
  role: false,
};

const getters = {
  GET_ROLE({ role }) {
    return role
  },

  LOGGED_IN({ loggedin }) {
    return loggedin;
  },

  GET_ACCESS_TOKEN({ token }) {
    return token;
  },

  GET_MESSAGE({ message }) {
    return message;
  },

  AUTH(state) {
    return state;
  },

  IS_TRADE({ role }) {
    return role == 'trade';
  },

  IS_FINANCIAL({ role }) {
    return role == 'financial';
  },

  IS_ADMIN({ role }) {
    return role == 'admin';
  }
};

const actions = {
  async LOGIN({ commit, dispatch }, credentials) {
    commit('SET_MESSAGE', '');
    const response = await api.post('login/', credentials);
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
    const response = await api.get('user/');
    const { data, ok } = response;
    if (ok) {
      if (data.status == "Token is Expired") {
        dispatch('LOGOUT');
      } else {
        commit('SET_LOGGED_IN', true);
        commit('user/SET_USER', data.user, { root: true });
        commit('SET_ROLE', data.role);
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
    // await api.post('api/logout/');
    commit('SET_LOGGED_IN', false);
    commit('user/SET_USER', false, { root: true });
    commit('SET_ROLE', false);
    commit('CLEAR_ACCESS_TOKEN', false);
  },
};

const mutations = {
  SET_ROLE(state, role) {
    state.role = role;
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

  SET_MESSAGE(state, message) {
    state.message = message;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
