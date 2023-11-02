<template>
  <div class="comment_film m-0 p-0 mt-4">
    <div v-if="user != null && parentComponent == 'DESC'" class="comment_head border-none">
      <button id="btn_evaluate" @click.prevent="showEvaluate">Đánh giá</button>
    </div>
    <div class="comment_head">
      <!-- {{-- Put data here --}} -->
      <p class="comment_title" id="total">Bình luận ({{ commentsList.length }})</p>
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

        <li>
          <div class="parent_comment">
            <div class="c_comment_head">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
            <div>
              <div class="c_comment_body">
                <a class="c_comment_user" href="#">h</a>
                <p class="c_comment_content">h</p>
                <div>
                  <p><button href="#" class="answer" data-id="g">Trả lời</button></p>
                  <p class="c_comment_time">12=03-2102</p>
                </div>
              </div>
            </div>
          </div>

          <div class="div_b">
            <div class="sub_cmt">
              <div class="c_comment_head">
                <a href="#">
                  <img src="{{ $sub->avt }}" alt="" />
                </a>
              </div>
              <div>
                <div class="c_comment_body">
                  <a class="c_comment_user" href="#">h</a>
                  <p class="c_comment_content">conteng</p>
                  <div>
                    <p class="c_comment_time">12-01-2002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="#" method="GET" class="un_active" id="form_answer_{}}">
            <textarea
              name="comment_{{ $comment->comment_id }}"
              id="comment_{{ $comment->comment_id }}"
              class="comment_a"
              cols="10"
              rows="5"
            ></textarea>
            <div class="div_comment">
              <i class="ti-comments-smiley" id="btn_{{ $comment->comment_id }}"></i>
              <input
                type="submit"
                value="Bình luận"
                class="btn_submit"
                id="btn_submit_{{ $comment->comment_id }}"
                data-id="{{ $comment->comment_id }}"
              />
            </div>
          </form>
        </li>
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

import 'vue3-emoji-picker/css'

export default {
  name: 'Comment',
  components: { EmojiPicker },
  props: ['parentComponent', 'filmId'],
  async setup(props, context) {
    const store = useStore()
    const user = computed(() => store.state.user.user)
    // eslint-disable-next-line vue/no-setup-props-destructure
    const parentComponent = props.parentComponent

    // eslint-disable-next-line vue/no-setup-props-destructure, no-unused-vars
    const filmId = props.filmId

    await store.dispatch('comment/getComments', filmId)

    const commentsList = store.state.comment.comments

    function showEvaluate() {
      return context.emit('showEvaluate')
    }
    const showEmojiPicker = ref(false)
    const contentCommnent = ref('')

    const onSelectEmoji = (emoji) => {
      console.log(emoji)
      contentCommnent.value += emoji.i
    }

    const comment = () => {
      const data = {
        commentContent: contentCommnent.value,
        filmCmtParentId: 8,
      }
      console.log(filmId)
      const result = filmsApi.commentFilm(data, +filmId)
      if (result) {
        // update comment
      }
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
