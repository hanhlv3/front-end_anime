import auth from '@/api/auth.api.js' // call api
import Cookies from 'js-cookie'
// initial state
const state = () => ({
  user: null,
  token: null,
})

// getters
const getters = {}

// actions
const actions = {
  async login({ commit }, user) {
    const response = await auth.login(user)
    if (response) {
      // get user
      const user = await auth.getUser()
      commit('setUser', user)
    }
  },
  async setUser({ commit }) {
    const user = await auth.getUser()
    commit('setUser', user)
  },

  async logout({ commit }) {
    Cookies.remove('token')
    commit('setUser', null)
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
