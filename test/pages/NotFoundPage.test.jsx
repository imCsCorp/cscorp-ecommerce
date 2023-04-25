import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NotFoundPage from "../../src/pages/NotFoundPage";

describe("<NotFoundPage />", () => {
  // beforeEach(() => {
  //   console.log(" hola mun ");
  // });

  test("should be mounted", () => {
    const { getByTestId } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/404"]}>
          <Routes>
            <Route path="/404" element={<NotFoundPage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(getByTestId("title").innerHTML).toContain("404");
  });

  test("should be redirected", () => {
    const { getByTestId } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/404"]}>
          <Routes>
            <Route path="/" element={<p data-testid="redirect">Home</p>} />
            <Route path="/404" element={<NotFoundPage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    );
    const button = getByTestId("go-home");
    fireEvent.click(button);
    expect(getByTestId("redirect").innerHTML).toContain("Home");
  });
});
