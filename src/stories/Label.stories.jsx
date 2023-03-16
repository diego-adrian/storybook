import { Label } from "./Label";

export default {
  title: 'MUI/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
  show: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Label',
  show: false
};

