// call api
import filmsApi from '@/api/films.api'

function buildCommentTree(comments, parentId = 0) {
  const result = []

  for (const comment of comments) {
    if (comment.filmCmtParentId === parentId) {
      const children = buildCommentTree(comments, comment.filmCmtId)
      if (children.length > 0) {
        comment.children = children
      }
      result.push(comment)
    }
  }

  return result
}

// initial state
const state = () => ({
  comments: [],
  numberComments: 0,
})

// getters
const getters = {}

// actions
const actions = {
  async getComments({ commit }, filmId) {
    const comments = await filmsApi.getCommentOfFilm(+filmId)
    const commentData = comments.sort((a, b) => {
      const aTime = new Date(a.createdAt)
      const bTime = new Date(b.createdAt)
      return bTime - aTime
    })
    await commit('setComments', commentData)
  },
}

// mutations
const mutations = {
  setComments(state, comments) {
    state.numberComments = comments.length
    const treeComments = buildCommentTree(comments)
    state.comments = treeComments
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
