import episodeApi from '@/api/episode.api.js' // call api

// initial state
const state = () => ({
  episodes: [],
})

// getters
const getters = {
  episodesIncrement: (state) => {
    return state.episodes.sort((a, b) => a.episodeNumber - b.episodeNumber)
  },
  getEpisodeById: (state) => (episodeId) => {
    let episode = null
    for (let item of state.episodes) {
      if (item.episodeId === episodeId) {
        episode = item
        break
      }
    }
    return episode
  },
  getEpisodeByNumber: (state) => (episodeNumber) => {
    let episode = null
    for (let item of state.episodes) {
      if (item.episodeNumber === episodeNumber) {
        episode = item
        break
      }
    }
    return episode
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
