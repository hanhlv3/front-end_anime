import episodeApi from '@/api/episode.api.js' // call api

// initial state
const state = () => ({
  episodes: [],
})

// getters
const getters = {
  episodesIncrement: (state) => {
    console.log(state.episodes)
    return state.episodes.sort((a, b) => b.episodeNumber - a.episodeNumber)
  },
}

// actions
const actions = {
  async getEpisodes({ commit }, filmId) {
    const episodes = await episodeApi.getAllEpisodes(filmId)
    commit('setEpisodes', episodes)
  },
}

// mutations
const mutations = {
  setEpisodes(state, episodes) {
    state.episodes = episodes
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
