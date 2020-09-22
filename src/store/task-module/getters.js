const getters = {
  filterTask(state) {
    return (taskFilter) => {
      let result = state.taskList
        .map((item) => ({ ...item }));

      if (taskFilter && Object.keys(taskFilter).length > 0) {
        result = result.filter((item) => {
          const description = taskFilter.description === '' || item.description === taskFilter.description;
          const assignedTo = taskFilter.assignedTo === '' || item.assignedTo === taskFilter.assignedTo;
          const done = taskFilter.done === item.done;

          return description && assignedTo && done;
        });
      }

      return result;
    };
  },
};

export default getters;
