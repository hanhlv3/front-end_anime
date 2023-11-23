import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const client_router = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      name: 'Home',
      path: '',

      component: () => import('@/views/client/Home.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-Category',
      path: '/category/:categoryName',

      component: () => import('@/views/client/Category.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-FilmOneEpisode',
      path: '/film/filmOneEpisode',

      component: () => import('@/views/client/FilmOneEpisode.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-Search',
      path: '/search/:keySearch',

      component: () => import('@/views/client/Find.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Client-Year',
      path: '/year/:year',

      component: () => import('@/views/client/Year.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'DescFilm',
      path: '/film/:filmId',

      component: () => import('@/views/client/DescFilm.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'DetailFilm',
      path: '/film/episode/:episodeId/:filmId',

      component: () => import('@/views/client/DetailFilm.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Login',
      path: '/login',

      component: () => import('@/views/client/Login.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Register',
      path: '/register',

      component: () => import('@/views/client/Register.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'Store',
      path: '/store',

      component: () => import('@/views/client/Store.vue'),
      meta: { label: 'default' },
    },
    {
      name: 'InforAccount',
      path: '/infor-account',

      component: () => import('@/views/client/InforAccount.vue'),
      meta: { label: 'default' },
    },
  ],
}
