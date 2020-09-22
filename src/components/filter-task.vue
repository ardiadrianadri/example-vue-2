<template>
  <form class="filter-form">
    <div class="fields">
      <v-text-field :label="'Description'" v-model="description" class="text-field"></v-text-field>
      <v-text-field :label="'Assigned to'" v-model="assignedTo" class="text-field"></v-text-field>
      <span class="switch">
        <label v-if="done">Done</label>
        <label v-else>Pending</label>
        <v-switch  v-model="done"></v-switch>
      </span>
    </div>
    <div class="buttons">
      <v-btn color="primary" @click="onSubmit">Search</v-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FilterTask',
  data() {
    return {
      description: '',
      assignedTo: '',
      done: false,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('onfilter', { description: this.description, assignedTo: this.assignedTo, done: this.done });
    },
  },
};
</script>
<style scoped>
  .filter-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  }

  .fields {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: flex-end;
    margin-bottom: 50px;
  }

  .switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-end;
    color: black;
    font-size: 16px;
    height: 72px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }

  .text-field {
    margin-right: 30px;
  }
</style>
