<template>
  <div class="f_content">
    <div class="watch_film">
      <div class="g_heading">
        <div>
          <p class="m-0"><i class="ti-video-clapper me-2"></i>{{ film.filmName }}</p>
        </div>
      </div>

      <div class="chap_film">
        <div class="episode">
          <div class="episode_number">Tập {{ episode.episodeNumber }}</div>
        </div>
        <div class="info_error">
          <a href="#"><i class="ti-info-alt fs-18"></i></a>
          <a href="#" class="mg-r10"><i class="ti-alert fs-18"></i></a>
        </div>
      </div>

      <div class="content_film">
        <iframe
          :src="episode.episodeLink"
          style="width: 100%; height: 100%"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>

      <div class="settings_film">
        <div class="settings_episode pd-7 bd-r-5 mg-r10">
          <i class="ti-settings"></i>
        </div>
        <div @click.prevent="nextEpisode" class="next_film pd-7 bd-r-5">
          <a class="pd-7">Tiếp<i class="ti-control-forward"></i></a>
        </div>
      </div>

      <div class="list_episode">
        <div class="heading">
          <span class="fw-700">Danh sách tập</span>
        </div>
        <div class="list_item_episode scroll-bar">
          <router-link
            v-for="item in episodeList"
            :key="item.episodeId"
            :class="{ active: item.episodeId == episode.episodeId }"
            :to="{ name: 'DetailFilm', params: { episodeId: item.episodeId, filmId: film.filmId } }"
          >
            <span>{{ item.episodeNumber }}</span>
          </router-link>
        </div>
      </div>

      <comment :filmId="filmId" :parentComponent="'DETAIL'" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Comment from '@/components/clients/Comment.vue'

import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/top-content/main-film.css'
import '@/assets/client/css/infor/bottom-content/episode-film.css'
import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/bottom-content/comment-film.css'
import '@/assets/client/css/switalert.css'
import '@/assets/client/css/viewfilm.css'

export default {
  name: 'DetailFilm',
  components: { Comment },
  async setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const episodeId = computed(() => route.params.episodeId)
    const filmId = computed(() => route.params.filmId)

    await store.dispatch('episode/getEpisodes', +filmId.value)
    await store.dispatch('film/getFilms')

    const episode = computed(() => store.getters['episode/getEpisodeById'](+episodeId.value))
    const film = computed(() => store.getters['film/getFilmByFilmId'](+filmId.value))
    const episodeList = computed(() => store.getters['episode/episodesIncrement'])

    const nextEpisode = () => {
      if (episode.value.episodeNumber == episodeList.value.length) return
      const numberNext = episode.value.episodeNumber + 1
      const episodeNext = store.getters['episode/getEpisodeByNumber'](numberNext)

      router.push({
        name: 'DetailFilm',
        params: {
          episodeId: episodeNext.episodeId,
          filmId: film.value.filmId,
        },
      })
    }

    return {
      episode,
      film,
      episodeList,
      nextEpisode,
      filmId,
    }
  },
}
</script>

<style scoped>
.next_film:hover {
  cursor: pointer;
}
</style>
