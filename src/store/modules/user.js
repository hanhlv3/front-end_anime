import auth from '@/api/auth.api.js' // call api
import { decodeToken } from '@/utils/decode_token'

// initial state
const state = () => ({
  user: null,
})

// getters
const getters = {}

// actions
const actions = {
  async login({ commit }, user) {
    const response = await auth.login(user)
    if (response) {
      // decode token and save user
      const userData = ''
      decodeToken()
      commit('setUser', userData)
    }
  },
}

// mutations
const mutations = {
  setIsLoggedIn(state, user) {
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
