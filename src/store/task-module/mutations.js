const mutations = {
  ADD_TASK(state, task) {
    state.taskList = [{ ...task }]
      .concat(state.taskList.map((item) => ({ ...item })));
  },
  UPDATE_TASK(state, { taskIndex }) {
    state.taskList = state.taskList.map((item, index) => {
      const result = { ...item };

      if (index === taskIndex) {
        result.done = !result.done;
      }

      return result;
    });
  },
};

export default mutations;
