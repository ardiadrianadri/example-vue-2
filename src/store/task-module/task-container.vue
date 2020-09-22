<template>
  <div class="task-container">
    <h3>Task filter</h3>
    <div class="task-filter">
      <FilterTask @onfilter='taskFilter'></FilterTask>
    </div>
    <h3>Add new task</h3>
    <div class="task-manager">
      <AddTask @onNewTask="addTask"></AddTask>
      <TaskList :taskList="listTask" @onStateChange="onTaskChange"></TaskList>
    </div>
  </div>
</template>

<script>
import FilterTask from '@/components/filter-task.vue';
import AddTask from '@/components/add-task.vue';
import TaskList from '@/components/task-list.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'TaskContainer',
  components: {
    FilterTask,
    AddTask,
    TaskList,
  },
  data() {
    return {
      listTask: [],
    };
  },
  computed: {
    ...mapGetters('taskModule', ['filterTask']),
  },
  methods: {
    ...mapMutations('taskModule', ['ADD_TASK', 'UPDATE_TASK']),
    taskFilter(event) {
      this.listTask = this.filterTask(event);
    },
    addTask(event) {
      this.ADD_TASK({ ...event, done: false });
      this.listTask = this.filterTask();
    },
    onTaskChange(event) {
      this.UPDATE_TASK({ taskIndex: event.index });
      this.listTask = this.filterTask();
    },
  },
  mounted() {
    this.listTask = this.filterTask();
  },
};
</script>
