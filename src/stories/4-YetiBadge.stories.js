// Button.stories.js

import React from "react";
import YetiBadge from "../Components/YetiBadge";

//👇 We create a “template” of how args map to rendering
const YetiBadge = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = YetiBadge.bind({});

Primary.args = {
  primary: true,
  label: "YetiBadge",
};

export const Secondary = YetiBadge.bind({});

Secondary.args = {
  ...Primary.args,
  primary: false,
};
