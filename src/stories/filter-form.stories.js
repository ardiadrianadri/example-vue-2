import FilterTask from '../components/filter-task.vue';

export default {
  title: 'Components/Filter form',
  component: FilterTask,
  argTypes: {
    onfilter: {
      action: 'Filter the tasks',
      description: 'Event to filter the actions',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FilterTask },
  template: `
    <FilterTask v-bind='$props' @onfilter='onfilter'></FilterTask>
  `,
});

export const Default = Template.bind({});
Default.args = {};
