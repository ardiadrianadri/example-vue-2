<template>
  <div class="task-list">
    <div class="headers">
      <span class="header description">Description</span>
      <span class="header assing">Assign to</span>
      <span class="header switch">Done</span>
    </div>
    <div class="body">
      <div class="list" v-for="(task,index) in taskList" :key="index" :class="{'done': task.done }">
        <span class="task description">{{task.description}}</span>
        <span class="task assing">{{task.assingTo}}</span>
        <span class="task switch">
          <v-switch  @click="(event) => { updateTask(index); }" :input-value="task.done"></v-switch>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    taskList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    updateTask(index) {
      this.$emit('onStateChange', { index });
    },
  },
};
</script>

<style scoped>
.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.headers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: lightskyblue;
  color: white;
  font-weight: 800;
  font-size: 24px;
  padding: 5px 0px;
}

.headers {
  border-left: solid whitesmoke 2px;
  border-right: solid whitesmoke 2px;
}

.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.list {
  width: 100%;
  height: 57px;
  border: solid black 2px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  color: black;
}

.list.done {
  text-decoration: line-through;
}

.header {
  text-align: center;
}

.task {
  text-align: center;
}

.task.switch {
  display: flex;
  justify-content: center;
  align-content: center;
}

.description {
  width: 33%;
}

.assing {
  width: 33%;
}

.switch {
  width: 33%;
}

</style>
