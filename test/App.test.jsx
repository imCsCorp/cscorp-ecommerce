import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  test("should be mounted", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("title").innerHTML).toContain("App");
  });
});
