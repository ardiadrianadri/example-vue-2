import TaskList from '../components/task-list.vue';

export default {
  title: 'Components/Task list',
  component: TaskList,
  argTypes: {
    onStateChange: {
      action: 'Change state of a task',
      description: 'Change state of a task',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TaskList },
  template: `
    <TaskList v-bind='$props' @onStateChange='onStateChange'></TaskList>
  `,
});

export const Default = Template.bind({});
Default.args = {
  taskList: [{
    description: 'To finish this Spike',
    assingTo: 'myself',
    done: false,
  }, {
    description: 'Finish arch documentation',
    assingTo: 'myself',
    done: true,
  }, {
    description: 'Clear my conscience',
    assingTo: 'myself',
    done: true,
  }, {
    description: 'Avoid CODVID-19',
    assingTo: 'myself',
    done: false,
  }],
};
