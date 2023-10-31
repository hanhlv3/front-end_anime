<template>
  <list-film :banner="categoryName" :listFilm="listFilms" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ListFilm from '@/components/clients/ListFilm.vue'

export default {
  name: 'Category',
  components: { ListFilm },
  setup() {
    const store = useStore()
    const route = useRoute()

    const categoryName = computed(() => route.params.categoryName)

    // watchEffect(() => {
    //   const categoryName = computed(() => route.params.categoryName)
    // })

    const listFilms = computed(() => store.getters['film/getFilmByCategory'](categoryName.value))
    return {
      categoryName,
      listFilms,
    }
  },
}
</script>

<style></style>
