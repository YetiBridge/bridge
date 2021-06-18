// MyComponent.stories.js

import React from "react";

import blackAvaxLogo from "../../public/redAvaxLogo.svg";

export default {
  title: "blackAvaxLogo",
};

const blackAvaxLogo = {
  src: blackAvaxLogo,
  alt: "my image",
  logo: blackAvaxLogo,
};

export const blackAvaxLogo = () => (
  <img src={blackAvaxLogo.src} alt={blackAvaxLogo.alt} />
);
