import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";

import "svelte";
import Button from "../src/Button.svelte";

test("rendered", () => {
  const { getByText } = render(Button, { buttonText: "Click me!" });

  expect(getByText("Click me!")).toBeInTheDocument();
});
