<template>
  <liv :key="comment.filmCmtId" class="flex-custome">
    <div :class="[comment.filmCmtParentId == 0 ? 'parent_comment' : 'sub_cmt']">
      <div class="c_comment_head">
        <a href="#">
          <img :src="comment.userAvatar" alt="avatar" />
        </a>
      </div>
      <div>
        <div class="c_comment_body">
          <a class="c_comment_user" href="#">{{ comment.userName }}</a>
          <p class="c_comment_content">{{ comment.commentContent }}</p>
          <div>
            <p><button @click.prevent="openAnswer" class="answer">Trả lời</button></p>
            <p class="c_comment_time">{{ comment.createdAt.substring(0, 10) }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- answer -->
    <form v-if="isOpenAnswer" @submit.prevent="answerComment(comment.filmCmtId)">
      <textarea class="comment_a" cols="10" rows="5" v-model="commentContent"></textarea>
      <div class="div_comment">
        <i @click="showEmojiPicker = !showEmojiPicker" class="ti-comments-smiley"></i>
        <EmojiPicker v-if="showEmojiPicker" :native="false" @select="onSelectEmoji" />
        <input type="submit" value="Bình luận" class="btn_submit" />
      </div>
    </form>
  </liv>
  <li v-if="comment.children && comment.children.length > 0">
    <comment-tree
      v-for="childComment in comment.children"
      :key="childComment.filmCmtId"
      :filmId="filmId"
      :comment="childComment"
    />
  </li>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import filmsApi from '@/api/films.api'
import EmojiPicker from 'vue3-emoji-picker'
import { useSweetAlert } from '@/utils/useSweetAlert'
import 'vue3-emoji-picker/css'

export default {
  name: 'CommentTree',
  props: ['comment', 'filmId'],
  components: { EmojiPicker },
  setup(props, context) {
    const store = useStore()
    // eslint-disable-next-line vue/no-setup-props-destructure
    const comment = props.comment

    // eslint-disable-next-line vue/no-setup-props-destructure
    const filmId = props.filmId

    const isOpenAnswer = ref(false)
    const showEmojiPicker = ref(false)

    const commentContent = ref('')
    const onSelectEmoji = (emoji) => {
      commentContent.value += emoji.i
    }

    const answerComment = async (filmCmtParentId) => {
      const data = {
        commentContent: commentContent.value,
        filmCmtParentId: +filmCmtParentId,
      }
      const result = await filmsApi.commentFilm(data, +filmId)
      if (result) {
        isOpenAnswer.value = false
        context.emit('updateComment')
      }
      isOpenAnswer.value = false
    }

    const openAnswer = () => {
      const user = store.state.user.user
      if (user == null) {
        const { showAlert } = useSweetAlert()
        showAlert('Thông báo', 'Vui lòng đăng nhập để bình luận', 'warning')
        return
      }
      commentContent.value = ''
      isOpenAnswer.value = !isOpenAnswer.value
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      comment,
      commentContent,
      answerComment,
      isOpenAnswer,
      openAnswer,
      showEmojiPicker,
      onSelectEmoji,
      // eslint-disable-next-line vue/no-dupe-keys
      filmId,
    }
  },
}
</script>

<style></style>
