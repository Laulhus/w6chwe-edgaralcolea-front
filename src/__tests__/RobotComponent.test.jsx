import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

      const element = screen.queryByAltText("A robot");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When clicked on its icon", () => {
    test("Then it should no longer be present in DOM", () => {
      const robot = {
        name: "Tardis",
        speed: 8,
        endurance: 10,
        img: "testUrl",
        creationDate: "10-01-2000",
      };
      const action = jest.fn();

      renderWithProviders(
        <RobotComponent robot={robot} actionOnClick={action} />
      );

      const button = screen.getByTitle("icon");

      userEvent.click(button);
      expect(action).toHaveBeenCalled();
    });
  });
});
