<template>
  <div
    class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="w-full mb-1">
      <div class="mb-4">
        <nav class="flex mb-5" aria-label="Breadcrumb">
          <ol
            class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"
          >
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                  >Category</a
                >
              </div>
            </li>
          </ol>
        </nav>
        <h1
          class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
        >
          All Films
        </h1>
      </div>
      <div
        class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700"
      >
        <div class="flex items-center mb-4 sm:mb-0">
          <form class="sm:pr-3" action="#" method="GET">
            <label for="products-search" class="sr-only">Search</label>
            <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
              <input
                type="text"
                name="email"
                id="products-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for category"
              />
            </div>
          </form>
          <div class="flex items-center w-full sm:justify-end">
            <div class="flex pl-2 space-x-1">
              <a
                href="#"
                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          id="createProductButton"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-create-product-default"
          data-drawer-show="drawer-create-product-default"
          aria-controls="drawer-create-product-default"
          data-drawer-placement="right"
          @click="isShowAdd = !isShowAdd"
        >
          ADD NEW FILM
        </button>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden shadow">
          <table
            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600"
          >
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  INDEX
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  NAME
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  IMAGE
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  EPISODES-QUANTITY
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  RELEASE-DATE
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  CATEGORY
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  CREATED-AT
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  UPDATED-AT
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  DETAIL EPISODE
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <tr
                v-for="film in paginatedFilm"
                :key="film.filmId"
                class="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td
                  class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{ films.indexOf(film) + 1 }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ film.filmName }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img :src="film.img" class="w-24 h-28" alt="image of film" />
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ film.episodesQuantity }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{
                    film.releaseDate.substring(0, film.createdAt.indexOf("T"))
                  }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <span v-for="cat in film.categories" :key="cat.categoryId">
                    {{ cat.categoryName }}
                    <br />
                  </span>
                </td>
                <td
                  class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400"
                >
                  {{ film.createdAt.substring(0, film.createdAt.indexOf("T")) }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{
                    film.updatedAt !== null
                      ? film.updatedAt.substring(0, film.updatedAt.indexOf("T"))
                      : "Not update"
                  }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  detail episode
                </td>
                <td class="p-4 space-x-2 whitespace-nowrap">
                  <button
                    type="button"
                    id="updateProductButton"
                    data-drawer-target="drawer-update-product-default"
                    data-drawer-show="drawer-update-product-default"
                    aria-controls="drawer-update-product-default"
                    data-drawer-placement="right"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="openUpdateFilm(film)"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Update
                  </button>
                  <button
                    type="button"
                    id="deleteProductButton"
                    data-drawer-target="drawer-delete-product-default"
                    data-drawer-show="drawer-delete-product-default"
                    aria-controls="drawer-delete-product-default"
                    data-drawer-placement="right"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    @click="openDeleteFilm(film)"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div
    class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center mb-4 sm:mb-0">
      <a
        href="#"
        class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        @click.prevent="previousPage"
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a
        href="#"
        class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        @click.prevent="nextPage"
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
        >Showing
        <span class="font-semibold text-gray-900 dark:text-white"
          >{{ currentPage * filmPerPage - filmPerPage + 1 }} -
          {{
            totalPage == currentPage ? films.length : currentPage * filmPerPage
          }}</span
        >

        of
        <span class="font-semibold text-gray-900 dark:text-white">{{
          films.length
        }}</span></span
      >
    </div>
    <div class="flex items-center space-x-3">
      <a
        href="#"
        class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click.prevent="previousPage"
      >
        <svg
          class="w-5 h-5 mr-1 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Previous
      </a>
      <a
        href="#"
        class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click.prevent="nextPage"
      >
        Next
        <svg
          class="w-5 h-5 ml-1 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>

  <!-- Edit film Drawer -->
  <update-film
    v-if="isShowUpdate"
    @close-update="isShowUpdate = !isShowUpdate"
    @update-film="updateFilm"
    :film="filmSelected"
  />

  <!-- Delete film Drawer -->
  <delete-film
    v-if="isShowDelete"
    @close-delete="isShowDelete = !isShowDelete"
    @delete-film="deleteFilm"
    :film="filmSelected"
  />

  <!-- Add category Drawer -->
  <add-film
    v-if="isShowAdd"
    @close-add="isShowAdd = !isShowAdd"
    @add-film="addFilm"
  />

  <!-- toast message -->
  <div
    id="toast-message-cta"
    class="w-full max-w-xs p-4 text-gray-500 bg-gray-200 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
    role="alert"
    v-if="showToast"
  >
    <div class="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
        />
      </svg>
      <div class="ml-3 text-sm font-normal">
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
          >Notification</span
        >
        <div class="mb-2 text-sm font-normal">{{ messageToast }}</div>
        <a
          href="#"
          @click.prevent="showToast = false"
          class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >Close</a
        >
      </div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-gray-200 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-message-cta"
        aria-label="Close"
        @click.prevent="showToast = false"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import AddFilm from "./add_film.vue";
import DeleteFilm from "./delete_film.vue";
import UpdateFilm from "./update_film.vue";
export default {
  name: "FilmList",
  components: { AddFilm, DeleteFilm, UpdateFilm },
  setup() {
    const isShowAdd = ref(false);
    const isShowUpdate = ref(false);
    const isShowDelete = ref(false);
    const showToast = ref(false);
    const filmSelected = ref(null);
    const messageToast = ref(null);

    const filmPerPage = ref(3);
    const currentPage = ref(1);

    const store = useStore();
    const index = ref(0);
    store.dispatch("film/getFilms");

    const films = computed(() => store.state.film.films);
    console.log(films);
    const totalPage = computed(() =>
      Math.ceil(films.value.length / filmPerPage.value)
    );

    const paginatedFilm = computed(() => {
      const startIndex = (currentPage.value - 1) * filmPerPage.value;
      const endIndex = startIndex + filmPerPage.value;
      return films.value.slice(startIndex, endIndex);
    });
    console.log("paginated film", paginatedFilm.value);

    // next page
    const nextPage = () => {
      // total page
      if (currentPage.value === totalPage.value) return;
      currentPage.value = currentPage.value + 1;
    };

    // previous page
    const previousPage = () => {
      if (currentPage.value === 1) return;
      currentPage.value = currentPage.value - 1;
    };

    // open update
    const openDeleteFilm = (filmItem) => {
      filmSelected.value = filmItem;
      isShowDelete.value = true;
      filmSelected.value = filmItem;
    };
    const openUpdateFilm = (filmItem) => {
      filmSelected.value = filmItem;
      isShowUpdate.value = !isShowUpdate.value;
    };

    // function set up Toast
    function displayToast(message) {
      showToast.value = true;
      messageToast.value = message;
    }
    // add category
    const addFilm = (isSuccess) => {
      if (isSuccess) {
        // insert susscess
        displayToast("Insert film successfully");
        isShowAdd.value = false;
        store.dispatch("film/getFilms");
      } else {
        // insert fail
        displayToast("Insert film failed");
      }
      setTimeout(() => {
        showToast.value = false;
      }, 2000);
    };

    const updateFilm = (isSuccess) => {
      if (isSuccess) {
        // insert susscess
        displayToast(" Update film successfully");
        isShowUpdate.value = false;
        store.dispatch("film/getFilms");
      } else {
        // insert fail
        displayToast(" Update film failed");
      }
      setTimeout(() => {
        showToast.value = false;
      }, 2000);
    };
    const deleteFilm = (isSuccess) => {
      if (isSuccess) {
        // insert susscess
        displayToast(" delete film successfully");
        isShowDelete.value = false;
        store.dispatch("film/getFilms");
      } else {
        // insert fail
        displayToast(" delete film failed");
      }
      setTimeout(() => {
        showToast.value = false;
      }, 2000);
    };
    return {
      isShowAdd,
      isShowUpdate,
      isShowDelete,
      showToast,
      messageToast,
      index,
      paginatedFilm,
      films,
      currentPage,
      totalPage,
      filmPerPage,
      filmSelected,
      nextPage,
      previousPage,
      openUpdateFilm,
      openDeleteFilm,
      addFilm,
      updateFilm,
      deleteFilm,
    };
  },
};
</script>

<style scoped>
#drawer-update-product-default {
  display: block;
}
#toast-message-cta {
  position: absolute;
  top: 35%;
  left: 50%;
}
</style>
