<template>
  <div class="tab-item" id="category">
    <a v-for="year in listYear" :key="year" href="">
      {{ year }}
    </a>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TabItemYear",
  setup() {
    const store = useStore();
    const listYear = computed(() => store.getters["film/listYear"]);

    return {
      listYear,
    };
  },
};
</script>

<style></style>
