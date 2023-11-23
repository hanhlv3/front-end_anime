<template>
  <list-film :banner="bannerName" :listFilm="listFilms" />
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'FilmOneEpisode',
  components: { ListFilm },
  setup() {
    const store = useStore()
    const bannerName = ref('Phim lẻ')
    const listFilms = computed(() => store.getters['film/getFilmOneEpisode'])

    return {
      bannerName,
      listFilms,
    }
  },
}
</script>

<style></style>
