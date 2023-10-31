<template>
  <Suspense>
    <div class="body">
      <div class="main">
        <div id="navbar">
          <nar-bar @toggleDrop="isOpenDropDown = !isOpenDropDown" />
        </div>
        <div v-if="isOpenDropDown" class="drop_down" id="drop"><drop-down /></div>
        <div id="content">
          <router-view></router-view>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </Suspense>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

import NarBar from '@/components/clients/NarBar.vue'
import DropDown from '@/components/clients/DropDown.vue'

import '@/assets/client/css/layouts.css'
export default {
  name: 'DefaultLayout',
  components: { NarBar, DropDown },
  setup() {
    const store = useStore()
    store.dispatch('film/getFilms')
    store.dispatch('category/getCategories')
    const isOpenDropDown = ref(false)

    return {
      isOpenDropDown,
      store,
    }
  },
}
</script>

<style>
.body {
  width: 100%;
  padding: 0 8vw;
  font-size: 14px;
  font-family: roboto, sans-serif;
  font-weight: 400;
  color: #ccc;
  line-height: normal;
  background-color: #000000 !important;
  margin: 0;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
