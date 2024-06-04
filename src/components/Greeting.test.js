import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render Hello world as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello world!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const paragrafElement = screen.getByText("It's good to see you");
    expect(paragrafElement).toBeInTheDocument();
  });

  test("render changed text if button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const paragrafElement = screen.getByText("Changed!");
    expect(paragrafElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragrafElement = screen.queryByText("It's good to see you");
    expect(paragrafElement).toBeNull();
  });
});
