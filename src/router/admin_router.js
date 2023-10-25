import AdminLayout from '@/layouts/AdminLayout.vue'

export const admin_router = {
  path: '/admin',
  component: AdminLayout,
  children: [
    {
      name: 'HomeAdmin',
      path: '',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/home.vue'),
      meta: { layout: 'admin', sideBar: 'home' },
    },
    {
      name: 'FilmList',
      path: '/admin/film',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/film/film_list.vue'),
      meta: { layout: 'admin', sideBar: 'film-list' },
    },
    {
      name: 'Episode',
      path: '/admin/episode/:id/:filmName',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/episode/episode.vue'),
      meta: { layout: 'admin', sideBar: 'episode' },
    },
    {
      name: 'CategoryList',
      path: '/admin/category',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/category/category_list.vue'),
      meta: { layout: 'admin', sideBar: 'category-list' },
    },
    {
      name: 'AddCategory',
      path: '/admin/category/add',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/category/add_category.vue'),
      meta: { layout: 'admin', sideBar: 'add-category' },
    },
  ],
}
