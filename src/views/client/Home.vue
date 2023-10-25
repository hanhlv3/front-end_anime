<template>
  <div class="carousel">
    <div class="banner g_heading">
      <div>Phim đề cử</div>
    </div>

    <div id="slide">
      <div class="slide-container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div id="card" class="swiper-slide">
              <a href="">
                <div>
                  <img
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1575936123452-b67c3203c357%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%253D&tbnid=YmDohMp4T5AODM&vet=12ahUKEwiZzcKO-46CAxXi1jQHHbnmD1MQMygBegQIARBL..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&docid=ExDvm63D_wCvSM&w=1000&h=667&q=image&ved=2ahUKEwiZzcKO-46CAxXi1jQHHbnmD1MQMygBegQIARBL"
                    style="width: 250px; height: 350px"
                    alt=""
                  />
                </div>
              </a>
              <div class="name">Bay vien ngoc rong</div>
              <div class="episode-lastes">7/10</div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <!-- new phim -->
  <div class="banner g_heading">
    <div>Phim mới nhất</div>
  </div>
  <div class="movies-list">
    <div class="movie-item">
      <a href="">
        <div class="episode-latest">9/10</div>
        <div>
          <img src="" alt="" />
        </div>

        <div class="score">{{ $score }}</div>

        <div class="name-movie">7 vien ngoc rong</div>
      </a>
    </div>
  </div>

  <!-- fomr login -->
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" action="" v-on:submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Username"
          name="username"
          v-model="user.email"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          name="password"
          v-model="user.password"
          required
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup() {
    const store = useStore()

    const user = reactive({
      email: null,
      password: null,
    })
    const login = () => {
      store.dispatch('user/login', user)
    }

    return {
      user,
      login,
    }
  },
}
</script>

<style></style>
