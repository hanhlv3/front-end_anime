<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()

    const currentLayout = computed(() => {
      // Determine which layout to use based on the route
      const route = router.currentRoute.value
      if (route.meta.layout === 'admin') return 'AdminLayout'

      return 'DefaultLayout'
    })

    return {
      currentLayout,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
