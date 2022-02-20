import createRobotThunk from "../redux/thunks/createRobotThunk";

describe("Given a createRobotThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch with a create action and a new robot", async () => {
      const robot = {
        name: "Tardis",
        speed: 8,
        endurance: 10,
        img: "testUrl",
        creationDate: "10-01-2000",
      };
      const dispatch = jest.fn();

      const thunkFunction = createRobotThunk(robot);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
