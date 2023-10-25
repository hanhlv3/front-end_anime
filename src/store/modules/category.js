import categoriesApi from '@/api/categories.api.js' // call api

// initial state
const state = () => ({
  categories: [],
})

// getters
const getters = {}

// actions
const actions = {
  async getCategories({ commit }) {
    const categories = await categoriesApi.getAllCategories()
    commit('setCategories', categories)
  },
}

// mutations
const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
