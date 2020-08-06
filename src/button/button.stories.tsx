import React from "react";
import { Button } from "./button";

export default { title: "Button" };

export const withText: () => React.ReactElement = () => (
  <Button>Hello Button</Button>
);

export const withEmoji: () => React.ReactElement = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
