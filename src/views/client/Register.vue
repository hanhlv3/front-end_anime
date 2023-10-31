<template>
  <div class="margin-20">
    <div class="banner g_heading">
      <div>Đăng ký</div>
    </div>
  </div>
  <loading :active="isLoading" :can-cancel="false"></loading>

  <div class="movies-list login" style="margin-bottom: calc(100vh - 794px)">
    <div v-if="isSuccess" class="login-google mt-3">
      <div class="alert alert-success">Đăng ký thành công! Vui lòng kiểm tra email để kích hoạt tài khoản của bạn</div>
    </div>
    <form v-on:submit.prevent="register">
      <div class="item">
        <label for="">Tên của bạn</label>
        <input type="text" name="user_name" placeholder="Nhập họ tên của bạn" v-model="user.userName" required />
        <!-- @error('user_name')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>
      <div class="item">
        <label for="">Email</label>
        <input type="text" name="email" placeholder="Nhập email của bạn" v-model="user.userEmail" required />
        <!-- @error('email')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>

      <div class="item">
        <label for="">Chọn hình ảnh avt</label>
        <input type="file" name="avt" placeholder="Nhập lại mật khẩu của bạn" @change="fileSelected" required />
        <!-- @error('avt')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>

      <div class="item">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" placeholder="Nhập mật khẩu của bạn" v-model="user.password" required />
        <!-- @error('password')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>

      <div class="item">
        <label for="">Nhập lại mật khẩu</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Nhập lại mật khẩu của bạn"
          v-model="user.confirmPassword"
          required
        />
        <p v-if="isErrorConfirm" class="error">Không chính xác với mật khẩu bạn đã nhập</p>
      </div>
      <div class="button">
        <div class="btn-login">
          <button type="submit" style="background-color: #37869e">Đăng ký</button>
        </div>
        <div style="color: #ccc" id="forget-password">
          Bạn đã có tài khoản?<router-link :to="{ name: 'Login' }">Đăng nhập</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
//import authApi from '@/api/auth.api'
import Loading from 'vue-loading-overlay'

import '@/assets/client/css/home.css'
import '@/assets/client/css/swiper-bundle.min.css'
import '@/assets/client/css/login/login.css'
import '@/assets/client/css/login/register.css'
import 'vue-loading-overlay/dist/css/index.css'
import authApi from '@/api/auth.api'

export default {
  name: 'Register',
  components: { Loading },
  setup() {
    const user = reactive({
      userName: null,
      userEmail: null,
      password: null,
      confirmPassword: null,
    })
    const isErrorConfirm = ref(false)
    const isSuccess = ref(false)
    const isLoading = ref(false)

    const isSelectedFile = ref(false)
    const image = ref(null)

    const fileSelected = (event) => {
      const file = event.target.files[0]
      image.value = file
      isSelectedFile.value = !isSelectedFile.value
    }

    const register = async () => {
      isLoading.value = true
      // validation
      if (user.confirmPassword != user.password) {
        isErrorConfirm.value = true
        isLoading.value = false
        return
      }
      const check = await authApi.register(user, image.value)
      isLoading.value = false
      isSuccess.value = check
    }

    return {
      user,
      fileSelected,
      register,
      isErrorConfirm,
      isSuccess,
      isLoading,
    }
  },
}
</script>

<style scoped>
.error {
  text-align: start;
  color: rgb(192, 77, 77);
}
</style>
