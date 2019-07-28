import Vue from 'vue';
import Router from 'vue-router';

import App from '@/components/App';
import Feed from '@/components/feed/Feed';
import Operations from '@/components/feed/operations/Operations';
import Legacy from '@/components/utils/Legacy';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/operations',
      name: 'App',
      component: App,
    },
    {
      path: '/',
      name: 'Feed',
      component: Feed,
      children: [
        {
          path: 'operations',
          name: 'Operations',
          component: Operations,
        },
        {
          path: '*',
          name: 'Legacy',
          component: Legacy,
          props: { text: 'Content under construction' },
        },
      ],
    },
  ],
});
