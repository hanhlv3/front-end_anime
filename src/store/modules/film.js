// call api
import filmsApi from '@/api/films.api'

// initial state
const state = () => ({
  films: [],
})

// getters
const getters = {
  listYear(state) {
    const listYear = state.films.map((item) => {
      const year = item.releaseDate.substring(0, 4)
      return year
    })
    return [...new Set(listYear)]
  },
  newFilms(state) {
    const listFilms = state.films.sort((a, b) => {
      const aTime = new Date(a.createdAt)
      const bTime = new Date(b.createdAt)
      return bTime - aTime
    })
    return listFilms
  },
  topFilms(state) {
    let listFilms = state.films.sort((a, b) => {
      return b.score - a.score
    })

    if (listFilms.length > 10) {
      listFilms = listFilms.slice(0, 9)
    }
    return listFilms
  },
  getFilmByCategory(state, categoryId) {
    let listFilms = state.films.filter((film) => {
      for (const cat in film.categories) {
        if (cat.categoryId === categoryId) return true
      }
      return false
    })
    return listFilms
  },
  getFilmByYear(state, year) {
    let listFilms = state.films.filter((film) => {
      const date = new Date(film.releaseDate)
      const filmYear = date.getFullYear()
      return filmYear === year
    })
    return listFilms
  },
}

// actions
const actions = {
  async getFilms({ commit }) {
    const films = await filmsApi.getAllFilms()
    await commit('setFilms', films)
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
