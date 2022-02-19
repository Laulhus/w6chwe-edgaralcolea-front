import { render, screen } from "@testing-library/react";
import React from "react";
import RobotComponent from "../components/RobotComponent/RobotComponent";

describe("Given a RobotComponent component", () => {
  describe("When instantiated", () => {
    test("Then it should render an image", () => {
      render(<RobotComponent />);

      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
});
