import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateRobotPage from "../pages/createRobotPage";
import renderWithProviders from "../setupTests";

describe("Given an CreateRobotPage component", () => {
  describe("When rendered", () => {
    test("Then it should render a form", () => {
      renderWithProviders(
        <BrowserRouter>
          <CreateRobotPage />
        </BrowserRouter>
      );

      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});
