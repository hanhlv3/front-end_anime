<template>
  <div class="carousel">
    <div class="banner g_heading">
      <div>Phim đề cử</div>
    </div>

    <div id="slide">
      <div class="slide-container">
        <swiper
          :slidesPerView="6"
          :spaceBetween="30"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="film in topFilms" :key="film.filmId" id="card" class="swiper-slide" style="width: 20%">
            <router-link :to="{ name: 'DescFilm', params: { filmId: film.filmId } }">
              <div>
                <img :src="film.img" style="width: 100%; height: 300px" alt="" />
              </div>
            </router-link>
            <div class="name">{{ film.filmName }}</div>
            <div class="episode-lastes">{{ `${film.currentEpisode}/${film.episodesQuantity}` }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- new phim -->
  <list-film :banner="'Phim mới nhất'" :listFilm="newFilms" />
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

// import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'Home',
  components: { Swiper, SwiperSlide, ListFilm },
  async setup() {
    const store = useStore()
    await store.dispatch('film/getFilms')
    await store.dispatch('category/getCategories')
    const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    const user = reactive({
      email: null,
      password: null,
    })
    const login = () => {
      store.dispatch('user/login', user)
    }

    // top film
    const topFilms = computed(() => store.getters['film/topFilms'])
    // new film
    const newFilms = computed(() => store.getters['film/newFilms'])
    return {
      user,
      login,
      arr,
      modules: [Autoplay, FreeMode, Pagination],
      topFilms,
      newFilms,
    }
  },
}
</script>

<style></style>
