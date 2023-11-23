<template>
  <list-film :banner="keySearch" :listFilm="listFilms" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'Find',
  components: { ListFilm },
  setup() {
    const store = useStore()
    const route = useRoute()

    const keySearch = computed(() => route.params.keySearch)

    // watchEffect(() => {
    //   const keySearch = computed(() => route.params.keySearch)
    // })

    const listFilms = computed(() => store.getters['film/getFilmByKeySearch'](keySearch.value))
    return {
      keySearch,
      listFilms,
    }
  },
}
</script>

<style></style>
