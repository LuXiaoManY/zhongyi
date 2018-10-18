import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token'),
    name: sessionStorage.getItem('name'),
    role: sessionStorage.getItem('role'),
    newrouter: [],
  },
  modules: {
    login,
  },
  getters,
  actions
});
export default store;
