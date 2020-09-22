import mutations from './mutations';
import getters from './getters';

const state = {
  taskList: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
