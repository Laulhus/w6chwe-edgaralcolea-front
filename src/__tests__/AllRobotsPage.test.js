import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllRobotsPage from "../pages/AllRobotsPage";
import renderWithProviders from "../setupTests";

describe("Given an AllRobotsPage component", () => {
  describe("When rendered", () => {
    test("Then it should render a list with title 'robot-list' links", () => {
      renderWithProviders(
        <BrowserRouter>
          <AllRobotsPage />
        </BrowserRouter>
      );

      const element = screen.getByTitle("robot-list");

      expect(element).toBeInTheDocument();
    });
  });
});
