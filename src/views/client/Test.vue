<template>
  <div class="margin-20">
    <div class="banner g_heading">
      <div>Đăng nhập thành viên</div>
    </div>
  </div>

  <div class="movies-list login" style="margin-bottom: calc(100vh - 544px)">
    <form>
      <div class="item">
        <label for="">Email</label>
        <input type="text" name="email" placeholder="Nhập email của bạn" />
        <!-- @error('email')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>

      <div class="item">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" placeholder="Nhập mật khẩu của bạn" />
        <!-- @error('password')
                    <p style="color:red;">{{ $message }}</p>
                @enderror -->
      </div>
      <div class="button">
        <div class="btn-login">
          <button>Đăng nhập</button>
          <a href="">Quên mật khẩu</a>
        </div>
        <div class="btn-register">
          <!-- <router-link :to="Register">Đăng ký</router-link> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Test',
  setup() {
    const store = useStore()
    const route = useRoute()

    const filmId = computed(() => route.params.filmId)
    console.log(filmId.value)

    store.dispatch('episode/getEpisodes', filmId.value)
    return {
      filmId,
    }
  },
}
</script>

<style></style>
