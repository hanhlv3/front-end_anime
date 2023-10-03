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
        name: "HomeAdmin",
        path: "",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/admin/home.vue"),
        meta: { layout: "admin", sideBar: "home" },
      },
      {
        name: "AddFilm",
        path: "/admin/addfilm",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/admin/add_film.vue"),
        meta: { layout: "admin", sideBar: "add-film" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
