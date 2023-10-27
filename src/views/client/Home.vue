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
            <a href="">
              <div>
                <img :src="film.img" style="width: 100%; height: 300px" alt="" />
              </div>
            </a>
            <div class="name">{{ film.filmName }}</div>
            <div class="episode-lastes">{{ `${film.currentEpisode}/${film.episodesQuantity}` }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- new phim -->
  <list-film :banner="'Phim mới nhất'" :listFilm="newFilms" />

  <!-- fomr login -->
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" action="" v-on:submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Username"
          name="username"
          v-model="user.email"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          name="password"
          v-model="user.password"
          required
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
  </div>
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
import '@/assets/client/css/home.css'

import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'Home',
  components: { Swiper, SwiperSlide, ListFilm },
  async setup() {
    const store = useStore()
    // await store.dispatch('film/getFilms')
    // await store.dispatch('category/getCategories')
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
