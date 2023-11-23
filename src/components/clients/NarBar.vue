<template>
  <div class="logo">
    <router-link class="g_logo" :to="{ name: 'Home' }">
      <img :src="require('@/assets/logo.png')" alt="logo thuong hieu" />
    </router-link>
  </div>

  <div class="cover">
    <div class="search-bar">
      <form @submit.prevent="search">
        <input type="text" name="key" v-model="keySearch" placeholder="Search..." required />
        <button type="submit"><i class="ti-search"></i></button>
      </form>
    </div>
    <div>
      <div class="icon">
        <a @click.prevent="toggleDrop" class="g_nav_btn p-lg-4 p-md-3 p-sm-2" id="bu">
          <i class="ti-menu"></i>
        </a>
        <router-link :to="{ name: 'Store' }" class="g_nav_btn p-lg-4 p-md-3 p-sm-2">
          <i class="ti-bookmark-alt"></i>
        </router-link>
        <router-link v-if="user == null" :to="{ name: 'Login' }" class="g_nav_btn p-lg-4 p-md-3 p-sm-2" href="#">
          <i class="ti-shift-right"></i>
        </router-link>
        <a
          v-if="user != null && !isDropAccount"
          style="hover: cursor: pointer"
          class="g_nav_btn p-lg-4 p-md-3 p-sm-2"
          @click="toggleAccount"
        >
          <i class="ti-user"></i>
        </a>
        <a
          v-if="user != null && isDropAccount"
          style="hover: cursor: pointer"
          class="g_nav_btn p-lg-4 p-md-3 p-sm-2"
          @click="toggleAccount"
        >
          <i class="ti-layout-placeholder"></i>
        </a>
      </div>

      <!-- drop account  -->
      <div v-if="user != null && isDropAccount" class="infor-account active" id="account">
        <div class="avatar">
          <img :src="user.avatar" alt="Images avatar of user" />
          <div>{{ user.realUserName }}</div>
        </div>
        <router-link :to="{ name: 'InforAccount' }">Thông tin tài khoản</router-link>
        <router-link v-if="user.role == 'ADMIN'" :to="{ name: 'HomeAdmin' }">Trang quản trị</router-link>
        <a @click.prevent="logout">Đăng xuất</a>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'NarBar',
  setup(props, context) {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => {
      return store.state.user.user
    })

    const isDropAccount = ref(false)

    const toggleAccount = () => (isDropAccount.value = !isDropAccount.value)
    const toggleDrop = () => context.emit('toggleDrop')
    const keySearch = ref('')

    const logout = async () => {
      await store.dispatch('user/logout')
    }

    const search = () => router.push({ name: 'Client-Search', params: { keySearch: keySearch.value } })

    return {
      toggleDrop,
      user,
      isDropAccount,
      keySearch,
      toggleAccount,
      logout,
      search,
    }
  },
}
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>
// eslint-disable-next-line prettier/prettier
