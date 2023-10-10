import { createStore } from "vuex";
import category from "./modules/category";
import user from "./modules/user";

export default createStore({
  modules: {
    category,
    user,
  },
});
