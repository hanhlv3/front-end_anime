<template>
  <div class="margin-20">
    <div class="banner g_heading">
      <div>Đăng nhập thành viên</div>
    </div>
  </div>

  <div class="movies-list login" style="margin-bottom: calc(100vh - 544px)">
    <div v-if="isSuccess" class="login-google mt-3">
      <div class="alert alert-success">Đăng nhập thành công</div>
    </div>
    <div v-if="isFalse" class="login-google mt-3">
      <div class="alert bg-red-500">Đăng nhập thất bại</div>
    </div>
    <form @submit.prevent="login">
      <div class="item">
        <label for="">Email</label>
        <input type="text" name="email" placeholder="Nhập email của bạn" v-model="user.email" />
        <!-- @error('email')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>

      <div class="item">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" placeholder="Nhập mật khẩu của bạn" v-model="user.password" />
        <!-- @error('password')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>
      <div class="button">
        <div class="btn-login">
          <button type="submit">Đăng nhập</button>
          <a href="">Quên mật khẩu</a>
        </div>
        <div class="btn-register">
          <router-link :to="{ name: 'Register' }">Đăng ký</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import '@/assets/client/css/home.css'
import '@/assets/client/css/swiper-bundle.min.css'
import '@/assets/client/css/login/login.css'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    const user = reactive({
      email: null,
      password: null,
    })

    const isFalse = ref(false)
    const isSuccess = ref(false)

    const login = async () => {
      await store.dispatch('user/login', user)
      const userResponse = store.state.user.user
      console.log(userResponse)
      if (userResponse != null) {
        // commit data
        isSuccess.value = true
        setTimeout(() => {
          isSuccess.value = false
          router.push({ name: 'Home' })
        }, 2000)
      } else isFalse.value = true

      setTimeout(() => {
        isFalse.value = false
        isSuccess.value = false
      }, 2000)
    }

    return {
      user,
      login,
      isFalse,
      isSuccess,
    }
  },
}
</script>

<style></style>
