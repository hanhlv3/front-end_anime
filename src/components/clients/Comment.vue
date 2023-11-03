<template>
  <div class="comment_film m-0 p-0 mt-4">
    <div v-if="user != null && parentComponent == 'DESC'" class="comment_head border-none">
      <button id="btn_evaluate" @click.prevent="showEvaluate">Đánh giá</button>
    </div>
    <div class="comment_head">
      <!-- {{-- Put data here --}} -->
      <p class="comment_title" id="total">Bình luận ({{ numberComment }})</p>
      <div class="comment_nav">
        <!-- {{-- Put data here --}} -->
        <select name="" id="">
          <option value=""><a href="#">Mặc định</a></option>
          <option value=""><a href="#">Mới nhất</a></option>
          <option value=""><a href="#">Cũ nhất</a></option>
        </select>
      </div>
    </div>
    <div class="comment_container">
      <form @submit.prevent="comment" v-if="user != null">
        <textarea
          name="comment"
          id="comment"
          class="cmt_1 comment_a"
          cols="10"
          rows="5"
          v-model="contentCommnent"
        ></textarea>
        <div class="div_comment">
          <i @click="showEmojiPicker = !showEmojiPicker" class="first-btn ti-comments-smiley" id="binh_luan"></i>
          <EmojiPicker v-if="showEmojiPicker" :native="false" @select="onSelectEmoji" />
          <input type="submit" value="Bình luận" id="btn_cmt" />
        </div>
      </form>

      <div v-if="user == null" class="login-comment">
        <router-link :to="{ name: 'Login' }">Đăng nhập để bình luận</router-link>
      </div>

      <ul class="comment_list">
        <!-- {{-- Put data here --}} -->
        <comment-tree
          v-for="comment in commentsList"
          :key="comment.filmCmtId"
          @updateComment="updateComment"
          :comment="comment"
          :filmId="filmId"
        />
      </ul>
      <div class="bt_load_cm" id="load_cm">
        <button href="#" class="fw-600" id="btn_load">Tải thêm bình luận</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import EmojiPicker from 'vue3-emoji-picker'
import filmsApi from '@/api/films.api'

import CommentTree from './CommentTree.vue'

import 'vue3-emoji-picker/css'

export default {
  name: 'Comment',
  components: { EmojiPicker, CommentTree },
  props: ['parentComponent', 'filmId'],
  async setup(props, context) {
    const store = useStore()
    const user = computed(() => store.state.user.user)
    // eslint-disable-next-line vue/no-setup-props-destructure
    const parentComponent = props.parentComponent

    // eslint-disable-next-line vue/no-setup-props-destructure, no-unused-vars
    const filmId = props.filmId

    await store.dispatch('comment/getComments', filmId)

    const commentsList = computed(() => store.state.comment.comments)
    const numberComment = computed(() => store.state.comment.numberComments)

    function showEvaluate() {
      return context.emit('showEvaluate')
    }
    const showEmojiPicker = ref(false)
    const contentCommnent = ref('')

    const onSelectEmoji = (emoji) => {
      contentCommnent.value += emoji.i
    }

    const comment = async () => {
      const data = {
        commentContent: contentCommnent.value,
        filmCmtParentId: null,
      }
      const result = await filmsApi.commentFilm(data, +filmId)
      if (result) {
        // update comment
        await store.dispatch('comment/getComments', filmId)
      }
      contentCommnent.value = ''
    }

    const updateComment = async () => {
      window.location.reload()
    }

    return {
      user,
      // eslint-disable-next-line vue/no-dupe-keys
      parentComponent,
      showEvaluate,
      showEmojiPicker,
      contentCommnent,
      onSelectEmoji,
      comment,
      commentsList,
      numberComment,
      updateComment,
    }
  },
}
</script>

<style>
.v3-emoji-picker.v3-color-theme-light {
  position: absolute;
  margin-top: 22px;
}
</style>
