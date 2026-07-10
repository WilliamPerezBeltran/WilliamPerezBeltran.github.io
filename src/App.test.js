import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page with name", () => {
  render(<App />);
  const nameElement = screen.getByText(/William Fernando Pérez/i);
  expect(nameElement).toBeInTheDocument();
});
