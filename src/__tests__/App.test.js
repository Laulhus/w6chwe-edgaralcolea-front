import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import renderWithProviders from "../setupTests";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should render 2 links", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const element = screen.getByText(/all robots/i);

      expect(element).toBeInTheDocument();
    });
  });
});
