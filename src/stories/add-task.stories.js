import AddTask from '../components/add-task.vue';

export default {
  title: 'Components/Add task form',
  component: AddTask,
  argTypes: {
    onNewTask: {
      action: 'Add new task',
      description: 'Event to create a new task',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AddTask },
  template: `
    <AddTask v-bind='$props' @onNewTask='onNewTask'></AddTask>
  `,
});

export const Default = Template.bind({});
Default.args = {};
