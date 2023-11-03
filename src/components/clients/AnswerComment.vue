<template>
  <form @submit.prevent="answerComment">
    <textarea class="comment_a" cols="10" rows="5" v-model="answer.commentContent"></textarea>
    <div class="div_comment">
      <i @click="showEmojiPicker = !showEmojiPicker" class="ti-comments-smiley"></i>
      <EmojiPicker v-if="showEmojiPicker" :native="false" @select="onSelectEmoji" />
      <input type="submit" value="Bình luận" class="btn_submit" />
    </div>
  </form>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import filmsApi from '@/api/films.api'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
export default {
  name: 'AnswerComment',
  components: { EmojiPicker },
  props: ['filmId', 'filmCmtParentId'],
  setup(props, context) {
    const store = useStore()

    // eslint-disable-next-line vue/no-setup-props-destructure
    const filmId = props.filmId
    // eslint-disable-next-line vue/no-setup-props-destructure, no-unused-vars
    const filmCmtParentId = props.filmCmtParentId

    const showEmojiPicker = ref(false)
    const answer = reactive({
      commentContent: null,
      filmCmtParentId: filmCmtParentId,
    })
    const onSelectEmoji = (emoji) => {
      answer.commentContent += emoji.i
    }

    const answerComment = async (filmCmtParentId) => {
      answer.filmCmtParentId = filmCmtParentId
      const result = await filmsApi.commentFilm(answer, +filmId)
      if (result) {
        await store.dispatch('comment/getComments', filmId)
        context.$emit('toggleAnswer')
      }
    }

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      answer,
      answerComment,
      showEmojiPicker,
      onSelectEmoji,
    }
  },
}
</script>

<style></style>
