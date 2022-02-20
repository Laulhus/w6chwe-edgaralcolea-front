import actionTypes from "../redux/actions/actionTypes";
import deleteRobotThunk from "../redux/thunks/deleteRobotThunk";

describe("Given a deleteRobotThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch with a delete action and id 3", async () => {
      const dispatch = jest.fn();
      const id = 3;
      const expectedAction = {
        id,
        type: actionTypes.deleteRobot,
      };
      const thunkFunction = deleteRobotThunk(id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it receives a dispatch function and wants to delete an unexisting item with id 9", () => {
    test("Then it should'n't invoke dispatch", async () => {
      const dispatch = jest.fn();
      const id = 9;
      const expectedAction = {
        id,
        type: actionTypes.deleteRobot,
      };
      const thunkFunction = deleteRobotThunk(id);

      await thunkFunction(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(expectedAction);
    });
  });
});
