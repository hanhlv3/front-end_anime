import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        name: "Home",
        path: "",

        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/client/Home.vue"),
        meta: { label: "default" },
      },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        name: "AddFilm",
        path: "/admin/addfilm",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/admin/AddFilm.vue"),
        meta: { layout: "admin" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
