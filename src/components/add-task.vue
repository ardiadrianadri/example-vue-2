<template>
  <form class="add-form">
    <v-text-field :label="'Description'" v-model="description" class="text-field"></v-text-field>
    <v-text-field :label="'Assigned to'" v-model="assingTo" class="text-field"></v-text-field>
    <v-btn color="primary" @click="setTask" class="submit-button">Add</v-btn>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      description: '',
      assingTo: '',
    };
  },
  methods: {
    setTask() {
      this.$emit('onNewTask', { description: this.description, assingTo: this.assingTo });
    },
  },
};
</script>

<style scoped>
.add-form {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.text-field {
  margin-right: 30px;
}
</style>
