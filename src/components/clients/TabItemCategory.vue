<template>
  <div class="tab-item" id="category">
    <router-link
      v-for="cat in categories"
      :key="cat.categoryId"
      :to="{ name: 'Client-Category', params: { categoryName: cat.categoryName } }"
    >
      {{ cat.categoryName }}
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TabItemCategory',
  setup() {
    const store = useStore()
    const categories = computed(() => store.state.category.categories)
    return {
      categories,
    }
  },
}
</script>

<style></style>
