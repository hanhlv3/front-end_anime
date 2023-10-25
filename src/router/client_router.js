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
  ],
}
