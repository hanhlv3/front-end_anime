<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    id="drawer-create-product-default"
    class="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-label"
    aria-hidden="true"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Update Film
    </h5>
    <button
      type="button"
      data-drawer-dismiss="drawer-create-product-default"
      aria-controls="drawer-create-product-default"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      @click="close"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <form v-on:submit.prevent="updateFilm">
      <div class="space-y-4">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            name="title"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
            required=""
            v-model="film.filmName"
          />
        </div>

        <div>
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Episode quantity
          </label>
          <input
            type="number"
            name="price"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            required=""
            v-model="film.episodesQuantity"
          />
        </div>
        <div>
          <label
            for="category-create"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Image</label
          >
          <input
            type="file"
            name="title"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
            @change="fileSelected"
          />
        </div>
        <div>
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Release date
          </label>
          <input
            type="date"
            name="price"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            required=""
            v-model="film.releaseDate"
          />
        </div>
        <div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >

          <ckeditor
            :editor="editor"
            v-model="film.description"
            id="description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter event description here"
          ></ckeditor>
        </div>
        <div>
          <label
            for="discount-create"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Category</label
          >
          <div
            v-for="cat in categories"
            :key="cat.categoryId"
            class="select-category flex justify-start ml-3 mb-3"
          >
            <input
              type="checkbox"
              name="price"
              id="price"
              class="inline-block mr-2"
              placeholder="0"
              :value="cat.categoryId"
              v-model="film.categories"
            />
            <label
              for="discount-create"
              class="inline-block text-sm font-medium text-gray-900 dark:text-white"
              >{{ cat.categoryName }}
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="w-full justify-center text-white inline-flex items-center bg-blue-700 border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
        >
          UPDATE FILM
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import filmApi from "@/api/films.api";
export default {
  name: "UpdateFilm",
  components: {
    ckeditor: CKEditor.component,
  },
  props: ["film"],
  setup(props, context) {
    const store = useStore();
    store.dispatch("category/getCategories");

    // eslint-disable-next-line vue/no-setup-props-destructure
    const filmProp = props.film;
    const filmId = filmProp.filmId;

    const film = reactive({
      filmName: filmProp.filmName,
      description: filmProp.description,
      episodesQuantity: filmProp.episodesQuantity,
      releaseDate: filmProp.releaseDate.slice(
        0,
        filmProp.releaseDate.indexOf("T")
      ),
      categories: filmProp.categories.map((element) => element.categoryId),
    });
    const isSelectedFile = ref(false);
    const image = ref(null);
    const close = () => {
      context.emit("close-update");
    };
    const fileSelected = (event) => {
      const file = event.target.files[0];
      image.value = file;
      isSelectedFile.value = !isSelectedFile.value;
    };

    const updateFilm = async () => {
      //if (!isSelectedFile.value) return;
      const check = await filmApi.updateFilm(filmId, film, image.value);
      context.emit("update-film", check);
    };

    return {
      close,
      categories: computed(() => store.state.category.categories),
      editor: ClassicEditor,
      fileSelected,
      updateFilm,
      // eslint-disable-next-line vue/no-dupe-keys
      film,
      image,
    };
  },
};
</script>

<style></style>
