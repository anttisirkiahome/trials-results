import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  someVarInStore: ''
}

const mutations = {
  setMyFirstActionVal (state, payload) {
    state.someVarInStore = payload
  }
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
