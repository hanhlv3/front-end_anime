// call api
import filmsApi from "@/api/films.api";

// initial state
const state = () => ({
  films: [],
});

// getters
const getters = {};

// actions
const actions = {
  async getFilms({ commit }) {
    const films = await filmsApi.getAllFilms();
    commit("setFilms", films);
  },
  insertFilmsList({ commit }, film) {
    commit("insertFilm", film);
  },
};

// mutations
const mutations = {
  setFilms(state, films) {
    state.films = films;
  },
  insertFilm(state, film) {
    state.films.push(film);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
