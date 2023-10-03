import AdminLayout from "@/layouts/AdminLayout.vue";

export const admin_router = {
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
      name: "FilmList",
      path: "/admin/film",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/views/admin/film_list.vue"),
      meta: { layout: "admin", sideBar: "film-list" },
    },
    {
      name: "AddFilm",
      path: "/admin/film/add",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/views/admin/add_film.vue"),
      meta: { layout: "admin", sideBar: "add-film" },
    },
    {
      name: "CategoryList",
      path: "/admin/category",
      component: () =>
        import(
          /* webpackChunkName: "Home" */ "@/views/admin/category_list.vue"
        ),
      meta: { layout: "admin", sideBar: "category-list" },
    },
    {
      name: "AddCategory",
      path: "/admin/category/add",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/views/admin/add_category.vue"),
      meta: { layout: "admin", sideBar: "add-category" },
    },
  ],
};
