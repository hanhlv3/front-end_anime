import { createRouter, createWebHistory } from "vue-router";

import { admin_router } from "./admin_router";
import { client_router } from "./client_router";

const routes = [admin_router, client_router];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
