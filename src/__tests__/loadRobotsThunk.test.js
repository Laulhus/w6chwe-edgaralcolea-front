import loadRobotsThunk from "../redux/thunks/loadRobotsThunk";

describe("Given a loadRobotsThunk thunk", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch", async () => {
      const dispatch = jest.fn();

      await loadRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
