import React from "react";
import YetiButton from "../Components/YetiButton";

// const Primary = Template.bind({});
// Primary.args = {
//    variant: 'primary',
// };

// Button.stories.js

export default {
  title: "YetiButton",
  component: YetiButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export const Text = () => <YetiButton>Hello Header</YetiButton>;
