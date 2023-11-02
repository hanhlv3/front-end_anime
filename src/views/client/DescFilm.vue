<template>
  <form v-if="isShowEvaluate">
    <div class="form-evaluate" id="form_evaluate1">
      <div class="head-evaluate">
        <span>Đánh giá phim</span>
        <button id="exits" @click.prevent="isShowEvaluate = !isShowEvaluate"><i class="ti-close"> </i></button>
      </div>
      <div class="start">
        <i class="ti-star star-evaluate" id="rate-1" @click="evaluate(1)"></i>
        <i class="ti-star star-evaluate" id="rate-2" @click="evaluate(2)"></i>
        <i class="ti-star star-evaluate" id="rate-3" @click="evaluate(3)"></i>
        <i class="ti-star star-evaluate" id="rate-4" @click="evaluate(4)"></i>
        <i class="ti-star star-evaluate" id="rate-5" @click="evaluate(5)"></i>
        <i class="ti-star star-evaluate" id="rate-6" @click="evaluate(6)"></i>
        <i class="ti-star star-evaluate" id="rate-7" @click="evaluate(7)"></i>
        <i class="ti-star star-evaluate" id="rate-8" @click="evaluate(8)"></i>
        <i class="ti-star star-evaluate" id="rate-9" @click="evaluate(9)"></i>
        <i class="ti-star star-evaluate" id="rate-10" @click="evaluate(10)"></i>
      </div>
    </div>
  </form>
  <div class="top_content">
    <div class="g_heading">
      <div>
        <p class="m-0"><i class="ti-video-clapper mr-2"></i>{{ film.filmName }}</p>
      </div>
    </div>
    <div class="main_film">
      <div class="poster_film" id="poster_film">
        <div class="poster" id="poster_id">
          <img :src="film.img" alt="" />

          <div>
            <div class="button_box">
              <router-link
                class="btn_watch"
                :to="{ name: 'DetailFilm', params: { filmId: film.filmId, episodeId: episodeList[0].episodeId } }"
              >
                Xem phim
              </router-link>
              <form action="{{ route('store.insert') }}" method="post">
                <input type="hidden" name="film_id" value="" />
                <button id="infor-btn-submit"></button>
              </form>

              <form action="" method="post">
                <button id="infor-btn-unfollow"></button>
              </form>
              <a class="btn_remember" href="#">Bỏ lưu</a>
            </div>
          </div>
        </div>
        <div class="rate" style="color: white">
          <i class="fa-regular fa-star" id="score-1"></i>
          <i class="fa-regular fa-star" id="score-2"></i>
          <i class="fa-regular fa-star" id="score-3"></i>
          <i class="fa-regular fa-star" id="score-4"></i>
          <i class="fa-regular fa-star" id="score-5"></i>
          <i class="fa-regular fa-star" id="score-6"></i>
          <i class="fa-regular fa-star" id="score-7"></i>
          <i class="fa-regular fa-star" id="score-8"></i>
          <i class="fa-regular fa-star" id="score-9"></i>
          <i class="fa-regular fa-star" id="score-10"></i>
        </div>
      </div>
      <div class="detail_film">
        <div class="detail">
          <div class="detail_list" id="detail_list">
            <div class="detail_content content_film" style="display: table">
              <h5 class="g_title">Nội dung:</h5>
              <!-- {{-- Put data here --}} -->
              <div v-html="film.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom_content">
    <div class="episode_film">
      <div class="episode_title">Tập phim</div>
      <div class="episode_container">
        <div>
          <!-- {{-- Put data here --}} -->

          <router-link
            v-for="episode in episodeList"
            :key="episode.episodeId"
            :to="{ name: 'DetailFilm', params: { episodeId: episode.episodeId, filmId: filmId } }"
            >{{ episode.episodeNumber }}</router-link
          >
        </div>
      </div>
    </div>
    <comment :filmId="filmId" :parentComponent="'DESC'" @showEvaluate="isShowEvaluate = !isShowEvaluate" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Comment from '@/components/clients/Comment.vue'
import { useSweetAlert } from '@/utils/useSweetAlert'

import filmsApi from '@/api/films.api'

import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/top-content/main-film.css'
import '@/assets/client/css/infor/bottom-content/episode-film.css'
import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/bottom-content/comment-film.css'
import 'vue-loading-overlay/dist/css/index.css'

// import '@/assets/client/js/vanillaEmojiPicker.js'
// import '@/assets/client/js/switalert.js'
// import '@/assets/client/js/font-awesome.js'
// import '@/assets/client/js/infor.js'

export default {
  name: 'DescFilm',
  components: { Comment },
  async setup() {
    const store = useStore()
    const route = useRoute()

    const filmId = computed(() => route.params.filmId)
    const isShowEvaluate = ref(false)

    await store.dispatch('episode/getEpisodes', filmId.value)
    await store.dispatch('film/getFilms')

    const film = computed(() => store.getters['film/getFilmByFilmId'](filmId.value))
    const episodeList = computed(() => store.getters['episode/episodesIncrement'])

    const evaluate = async (value) => {
      console.log(value)
      const data = {
        evaluateValue: value,
        filmId: filmId.value,
      }
      const result = await filmsApi.evaluateFilm(data)

      if (result) {
        const { showAlert } = useSweetAlert()
        showAlert('Thông báo', 'Cảm ơn bạn đã đánh giá', 'success')
      }
      isShowEvaluate.value = false
      console.log(result)
    }

    const comment = async (contentComment, filmCmtParentId) => {
      const data = {
        commentContent: contentComment,
        filmCmtParentId: filmCmtParentId,
      }
      console.log(data)
    }

    return {
      film,
      episodeList,
      isShowEvaluate,
      evaluate,
      comment,
      filmId,
    }
  },
}
</script>

<style></style>
