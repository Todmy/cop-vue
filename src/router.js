import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]", webpackPrefetch: true */ `@/views/${view}.vue`);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
    },
    {
      path: '/singleton',
      name: 'singleton',
      component: loadView('Singleton'),
      meta: { rootHolder: true },
    },
  ],
});
