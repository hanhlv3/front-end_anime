<template>
  <div class="main-container">
    <div class="g_heading">
      <div>
        <p class="m-0"><i class="fa-regular fa-address-card me-2"></i>Hồ sơ cá nhân</p>
      </div>
    </div>

    <div class="p-profile-container">
      <div class="profile">
        <div class="profile-main">
          <div class="profile-avt">
            <img :src="user.avatar" alt="" />

            <form>
              <input type="file" name="new_avatar" value="" />
              <button>Cập nhật</button>
            </form>
            <button class="profile-avt-btnsubmit" onclick="">Đổi ảnh</button>
          </div>
          <form class="profile-infor" action="{{ route('profile.update_user') }}" method="post">
            <div class="profile-infor-name">
              <label for="user_name">Tên người dùng:</label>
              <input type="text" name="user_name" v-model="user.realUserName" />
            </div>
            <div class="profile-infor-email">
              <label for="user_name">Email:</label>
              <input type="text" name="user_email" v-model="user.email" />
            </div>
            <div class="profile-infor-created">
              <label for="created_at">Ngày tham gia:</label>
              <input type="text" name="user_name" v-model="user.createdAt" disabled />
            </div>
            <button></button>
          </form>
          <div class="profile-infor-btnedit profile-infor-btn">Chỉnh sửa</div>
          <div class="profile-infor-btngroup">
            <div class="profile-infor-btnsave profile-infor-btn">Lưu</div>
            <div class="profile-infor-btncancel profile-infor-btn">Hủy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import '@/assets/client/css/profile.css'
import { computed } from 'vue'
export default {
  name: 'InforAccount',
  setup() {
    const store = useStore()

    const user = computed(() => store.state.user.user)
    console.log(user.value)

    return {
      user,
    }
  },
}
</script>

<style></style>
