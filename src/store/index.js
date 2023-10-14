import { createStore } from "vuex";
import category from "./modules/category";
import user from "./modules/user";
import film from "./modules/film";

export default createStore({
  modules: {
    category,
    user,
    film,
  },
});
