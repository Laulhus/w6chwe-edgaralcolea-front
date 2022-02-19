import { screen } from "@testing-library/react";
import React from "react";
import RobotComponent from "../components/RobotComponent/RobotComponent";
import renderWithProviders from "../setupTests";

describe("Given a RobotComponent component", () => {
  describe("When instantiated", () => {
    test("Then it should render an image", () => {
      const robot = {
        name: "Tardis",
        speed: 8,
        endurance: 10,
        img: "testUrl",
        creationDate: "10-01-2000",
      };

      renderWithProviders(<RobotComponent robot={robot} />);

      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
});
