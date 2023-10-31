<template>
  <div class="tab-item" id="category">
    <router-link v-for="year in listYear" :key="year" :to="{ name: 'Client-Year', params: { year: year } }">
      {{ year }}
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TabItemYear',
  setup() {
    const store = useStore()
    const listYear = computed(() => store.getters['film/listYear'])

    return {
      listYear,
    }
  },
}
</script>

<style></style>
