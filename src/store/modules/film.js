// call api
import filmsApi from '@/api/films.api'

// initial state
const state = () => ({
  films: [],
})

// getters
const getters = {
  listYear(state) {
    console.log(state.films)
    const listYear = state.films.map((item) => {
      const year = item.releaseDate.substring(0, 4)
      return year
    })
    return [...new Set(listYear)]
  },
}

// actions
const actions = {
  async getFilms({ commit }) {
    const films = await filmsApi.getAllFilms()
    commit('setFilms', films)
  },
  insertFilmsList({ commit }, film) {
    commit('insertFilm', film)
  },
}

// mutations
const mutations = {
  setFilms(state, films) {
    state.films = films
  },
  insertFilm(state, film) {
    state.films.push(film)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
