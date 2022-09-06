// import { render, screen } from '@testing-library/react';
// import App from './App';

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("testing event App", () => {
  test("testing App Heading", () => {
    //arrange
    render(<App />);
    //act
    //assert
    const AppHeading = screen.getByText("Event Manager App");
    expect(AppHeading).toBeInTheDocument();
  });
  test("testing Display Text", () => {
    //arrange
    render(<App />);
    //act
    //assert
    const display = screen.getByText("Display");
    expect(display).toBeInTheDocument();
  });

  test("test paragraph", () => {
    // arrange
    render(<App />);
    //act
    const button = screen.getByRole("button");
    userEvent.click(button);
    //assert
    const para = screen.getByText("test");
    expect(para).toBeInTheDocument();
  });
  // test("finding reset button", () => {
  //   render(<App />);
  //   const resetElement = screen.getByText(/reset/i);
  //   expect(resetElement).toBeInTheDocument();
  // });
});
