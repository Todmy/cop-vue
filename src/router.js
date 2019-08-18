import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]", webpackPrefetch: true */ `@/views/${view}.vue`);
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
    },
  ],
});
