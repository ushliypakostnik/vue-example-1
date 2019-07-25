import Vue from 'vue';

import App from '@/components/App';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.app__header').textContent)
      .toEqual('Vue cli based frontend boilerplate');
  });
});
