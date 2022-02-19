import actionTypes from "../redux/actions/actionTypes";
import robotReducer from "../redux/reducers/robotReducer";

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

  describe("When it receives an action with type:'test'", () => {
    test("Then it should return the currentRobots", () => {
      const expectedRobots = [];
      const action = {
        type: "test",
        robots: expectedRobots,
      };

      const newRobots = robotReducer([], action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });

  describe("When it doesn't receive neither action nor state", () => {
    test("Then it should return the currentRobots", () => {
      const expectedRobots = [];
      const action = {
        type: "test",
        robots: expectedRobots,
      };

      const newRobots = robotReducer();

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
