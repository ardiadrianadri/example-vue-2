<template>
  <div class="home">
    <TaskContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import TaskContainer from '@/store/task-module/task-container.vue';

export default {
  name: 'Home',
  components: {
    TaskContainer,
  },
};
</script>
