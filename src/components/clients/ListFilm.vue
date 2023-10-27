<template>
  <div class="banner g_heading">
    <div>{{ banner }}</div>
  </div>
  <div class="movies-list">
    <div v-for="film in paginatedFilm" :key="film.filmId" class="movie-item">
      <a href="">
        <div class="episode-latest">{{ `${film.currentEpisode}/${film.episodesQuantity}` }}</div>
        <div>
          <img :src="film.img" alt="" />
        </div>

        <div class="score">{{ film.score == -1.0 ? 'Nan' : film.film.score }}</div>

        <div class="name-movie">{{ film.filmName }}</div>
      </a>
    </div>
  </div>
  <div v-if="totalPage != 1" class="pagination">
    <div>
      {{ currentPage * filmPerPage - filmPerPage + 1 }} -
      {{ totalPage == currentPage ? listFilm.length : currentPage * filmPerPage }} of {{ listFilm.length }}
    </div>
    <div class="button">
      <a href="" class="prevent" @click.prevent="previousPage">Previous</a>
      <a href="" class="next" @click.prevent="nextPage">Next</a>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'ListFilm',
  props: ['banner', 'listFilm'],
  setup(props) {
    const banner = computed(() => props.banner)
    const listFilm = computed(() => props.listFilm)
    // content new film
    const filmPerPage = ref(1)
    const currentPage = ref(1)
    const totalPage = computed(() => Math.ceil(listFilm.value.length / filmPerPage.value))
    const paginatedFilm = computed(() => {
      const startIndex = (currentPage.value - 1) * filmPerPage.value
      const endIndex = startIndex + filmPerPage.value
      return listFilm.value.slice(startIndex, endIndex)
    })
    // next page
    const nextPage = () => {
      // total page
      if (currentPage.value === totalPage.value) return
      currentPage.value = currentPage.value + 1
    }

    // previous page
    const previousPage = () => {
      if (currentPage.value === 1) return
      currentPage.value = currentPage.value - 1
    }
    return {
      filmPerPage,
      totalPage,
      currentPage,
      // eslint-disable-next-line vue/no-dupe-keys
      banner,
      // eslint-disable-next-line vue/no-dupe-keys
      listFilm,
      paginatedFilm,
      nextPage,
      previousPage,
    }
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
}
.pagination div {
  position: relative;
  display: flex;
  align-items: center;
}
.pagination a {
  color: #f3dede;
  float: left;
  padding: 8px 16px;
  background-color: #585858;
  text-decoration: none;
}
.pagination .prevent {
  background-color: #4caf50;
  margin-right: 15px;
}
.pagination .next {
  background-color: #a54f4f;
  padding: 8px 28px;
}
</style>
