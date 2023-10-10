import { createRouter, createWebHistory } from "vue-router";

import { admin_router } from "./admin_router";
import { client_router } from "./client_router";

const routes = [admin_router, client_router];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = () => {};
//   if (to.matched.some((route) => route.meta.requiresAuth)) {
//     // kiểm tra xem những router nào yêu cầu xác thực
//     if (isAuthenticated) {
//       console.log("test");
//     } else next("/login");
//   } else next();
// });

export default router;
