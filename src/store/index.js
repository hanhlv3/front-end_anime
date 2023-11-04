import { createStore } from 'vuex'
import category from './modules/category'
import user from './modules/user'
import film from './modules/film'
import episode from './modules/episode'
import comment from './modules/comment'
import filmStore from './modules/filmStore'

export default createStore({
  modules: {
    category,
    user,
    film,
    episode,
    comment,
    filmStore,
  },
})
