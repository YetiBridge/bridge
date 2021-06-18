// MyComponent.stories.js

import React from "react";

import redAvaxLogo from "../../public/redAvaxLogo.svg";

export default {
  title: "redAvaxLogo",
};

const redAvaxLogo = {
  src: redAvaxLogo,
  alt: "my image",
};

export const redAvaxLogo = () => (
  <img src={redAvaxLogo.src} alt={redAvaxLogo.alt} />
);
