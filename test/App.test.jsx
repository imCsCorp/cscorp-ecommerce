import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/App";

describe("<App />", () => {
  test("should be mounted", () => {
    const { getByTestId } = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    // screen.debug();
    // expect(getByTestId("title").innerHTML).toContain("App");
  });
});
