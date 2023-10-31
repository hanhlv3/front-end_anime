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
  getFilmByCategory: (state) => (categoryName) => {
    console.log('category name', categoryName)
    const listFilms = state.films.filter((film) => {
      for (const cat of film.categories) {
        if (cat.categoryName === categoryName) return true
      }
      return false
    })
    return listFilms
  },
  getFilmByYear: (state) => (year) => {
    console.log(year)
    let listFilms = state.films.filter((film) => {
      const date = new Date(film.releaseDate)
      const filmYear = date.getFullYear()
      return filmYear === year
    })
    return listFilms
  },
  getFilmByFilmId: (state) => (filmId) => {
    let filmResult
    for (let film of state.films) {
      if (film.filmId == filmId) {
        filmResult = film
        break
      }
    }
    return filmResult
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
