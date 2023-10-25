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
      New Category
    </h5>
    <button
      type="button"
      data-drawer-dismiss="drawer-create-product-default"
      aria-controls="drawer-create-product-default"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      @click="closeAdd"
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
    <form v-on:submit.prevent="addCategory">
      <div class="space-y-4">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input
            type="text"
            name="title"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Category name"
            required=""
            v-model="categoryName"
          />
        </div>

        <button
          type="submit"
          class="w-full justify-center text-white inline-flex items-center bg-blue-700 border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
        >
          Add category
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import categoriesApi from '@/api/categories.api'
export default {
  name: 'AddCategory',
  setup(props, context) {
    const closeAdd = () => context.emit('close-add')

    const categoryName = ref(null)

    const addCategory = async () => {
      const check = await categoriesApi.insertCategory({
        categoryName: categoryName.value,
      })

      context.emit('add-category', check)
    }

    return {
      closeAdd,
      addCategory,
      categoryName,
    }
  },
}
</script>

<style scoped></style>
