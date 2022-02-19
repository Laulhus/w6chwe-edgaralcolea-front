import actionTypes from "../redux/actions/actionTypes";
import robotReducer from "../redux/store/reducers/robotReducer";

describe("Given a robotReducer function", () => {
  describe("When it receives a loadRobotsAction with a robots array", () => {
    test("Then it should return the received robots array", () => {
      const expectedRobots = [
        {
          name: "Tardis",
          speed: 8,
        },
        {
          name: "Cybermen",
          speed: 2,
        },
      ];
      const action = {
        type: actionTypes.loadRobots,
        robots: expectedRobots,
      };

      const newRobots = robotReducer([], action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
