<template>
  <list-film :banner="year" :listFilm="listFilms" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'Year',
  components: { ListFilm },
  setup() {
    const store = useStore()
    const route = useRoute()

    const year = computed(() => route.params.year)
    const listFilms = computed(() => store.getters['film/getFilmByYear'](+year.value))
    return {
      year,
      listFilms,
    }
  },
}
</script>

<style></style>
