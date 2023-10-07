import categoriesApi from "@/api/categories.api.js"; // call api

// initial state
const state = () => ({
  categories: [],
});

// getters
const getters = {};

// actions
const actions = {
  async getAllProducts({ commit }) {
    const categories = await categoriesApi.getAllCategories();
    commit("setCategories", categories);
  },
};

// mutations
const mutations = {
  setCategories(state, categories) {
    state.all = categories;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
