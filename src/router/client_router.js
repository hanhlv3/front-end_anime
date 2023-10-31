import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const client_router = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      name: 'Home',
      path: '',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/Home.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-Category',
      path: '/category/:categoryName',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/Category.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-Year',
      path: '/year/:year',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/Year.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'DescFilm',
      path: '/film/:filmId',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/DescFilm.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'DetailFilm',
      path: '/film/episode/:episodeId',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/DetailFilm.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Login',
      path: '/login',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/Login.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Register',
      path: '/register',

      component: () => import(/* webpackChunkName: "Home" */ '@/views/client/Register.vue'),
      meta: { label: 'default' },
    },
  ],
}
