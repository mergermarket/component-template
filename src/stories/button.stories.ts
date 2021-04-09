import { action } from "@storybook/addon-actions";
import Button from "../Button.svelte";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    buttonText: {
      control: {
        type: "text",
      },
    },
  },
};
