// call api
import filmsApi from '@/api/films.api'

// initial state
const state = () => ({
  comments: [],
})

// getters
const getters = {}

// actions
const actions = {
  async getComments({ commit }, filmId) {
    const comments = await filmsApi.getCommentOfFilm(+filmId)
    await commit('setComments', comments)
  },
}

// mutations
const mutations = {
  setComments(state, comments) {
    state.comments = comments
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
