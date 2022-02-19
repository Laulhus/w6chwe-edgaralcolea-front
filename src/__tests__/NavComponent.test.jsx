import { render, screen } from "@testing-library/react";
import React from "react";
import NavComponent from "../components/Nav/NavComponent";

describe("Given a NavComponent component", () => {
  describe("When instantiated", () => {
    test("Then it should render 3 list items", () => {
      render(<NavComponent />);

      const listItems = screen.getAllByRole("listitem");

      expect(listItems.length).toBe(3);
    });
  });
});
