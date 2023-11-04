import filmStoreApi from '@/api/storeFilm.api' // call api

// initial state
const state = () => ({
  filmStores: [],
})

// getters
const getters = {
  checkFilmInStore: (state) => (filmId) => {
    const film = state.filmStores.find((item) => item.film.filmId == filmId)
    return film
  },
}

// actions
const actions = {
  async getFilmStores({ commit }) {
    const filmStores = await filmStoreApi.getFilmStores()
    commit('setFilmStores', filmStores)
  },
  async deleteFilmStore(__, filmId) {
    await filmStoreApi.deleteFilmStore(filmId)
  },
  async saveFilm(__, filmId) {
    await filmStoreApi.insertFilmStore(filmId)
  },
}

// mutations
const mutations = {
  setFilmStores(state, filmStores) {
    state.filmStores = filmStores
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
