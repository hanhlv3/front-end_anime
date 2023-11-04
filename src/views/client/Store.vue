<template>
  <div class="main-container">
    <div class="g_heading">
      <div>
        <p class="p-0 m-0"><i class="ti-bookmark-alt me-2"></i>Kho Phim</p>
      </div>
    </div>
    <div class="p-store-container">
      <ul class="store-list">
        <div v-for="film in filmStores" :key="film.filmStoreId" class="store-film">
          <div class="store-film-img">
            <img :src="film.film.img" alt="" />
          </div>
          <div class="store-film-name">
            <div class="store-film-desc">
              <router-link :to="{ name: 'DescFilm', params: { filmId: film.film.filmId } }">Xem phim</router-link>
            </div>
            <p>{{ film.film.filmName }}</p>
          </div>
          <div class="store-film-delete">
            <form @submit.prevent="deleteFilmStore(film.filmStoreId)">
              <button type="submit">Xóa</button>
            </form>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import '@/assets/client/css/store.css'
import { computed } from 'vue'
export default {
  name: 'Store',
  setup() {
    const store = useStore()

    const filmStores = computed(() => store.state.filmStore.filmStores)

    console.log(filmStores.value)

    const deleteFilmStore = async (filmId) => {
      await store.dispatch('filmStore/deleteFilmStore', filmId)
      await store.dispatch('filmStore/getFilmStores')
    }

    return {
      filmStores,
      deleteFilmStore,
    }
  },
}
</script>

<style></style>
