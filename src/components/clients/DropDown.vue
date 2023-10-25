<template>
  <div class="tab-links">
    <a
      href="#"
      @click.prevent="tabActive = 'category'"
      class="tab"
      :class="{ 'tab-active': tabActive == 'category' }"
      ><i>Thể loại</i></a
    >
    <a
      href="#"
      @click.prevent="tabActive = 'year'"
      class="tab"
      :class="{ 'tab-active': tabActive == 'year' }"
      ><i>Năm</i></a
    >
    <a
      href="#"
      @click.prevent="tabActive = 'filter'"
      class="tab"
      :class="{ 'tab-active': tabActive == 'filter' }"
      ><i>Lọc phim</i></a
    >
    <a
      href="#"
      class="tab"
      @click="tabActive = 'single'"
      :class="{ 'tab-active': tabActive == 'single' }"
      ><i>Phim lẻ</i></a
    >
  </div>

  <div class="tab-content">
    <tab-item-category v-if="tabActive == 'category'" />
    <tab-item-year v-if="tabActive == 'year'" />
  </div>
</template>

<script>
import { ref } from "vue";

import TabItemYear from "./TabItemYear.vue";
import TabItemCategory from "./TabItemCategory.vue";
export default {
  name: "DropDown",
  components: { TabItemCategory, TabItemYear },
  setup() {
    const tabActive = ref("category");

    return {
      tabActive,
    };
  },
};
</script>

<style></style>
