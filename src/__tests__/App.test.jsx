import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blogData from "../data/blog";

describe("Blog Template Prop Validations", () => {
  test("renders the correct blog header name", () => {
    render(<App />);
    const headerElement = screen.getByText(blogData.name);
    expect(headerElement).toBeInTheDocument();
  });

  test("uses default date fallback when no date is provided", () => {
    render(<App />);
    const fallbackElements = screen.getAllByText("January 1, 1970");
    expect(fallbackElements.length).toBeGreaterThan(0);
  });
});
