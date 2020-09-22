import Vue from 'vue';
import Vuex from 'vuex';

import taskModule from './task-module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    taskModule,
  },
});
