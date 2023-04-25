import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "../../src/pages/HomePage";

describe("<HomePage />", () => {
  test("should be mounted", () => {
    const { getByTestId } = render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    );
    expect(
      getByTestId("container").classList.contains("container")
    ).toBeTruthy();
  });
});
