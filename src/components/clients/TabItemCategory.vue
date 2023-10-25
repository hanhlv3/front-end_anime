<template>
  <div class="tab-item" id="category">
    <a v-for="cat in categories" :key="cat.categoryId" href="">
      {{ cat.categoryName }}
    </a>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TabItemCategory",
  setup() {
    const store = useStore();
    const categories = computed(() => store.state.category.categories);
    return {
      categories,
    };
  },
};
</script>

<style></style>
