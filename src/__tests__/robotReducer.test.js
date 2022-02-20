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

      const newRobots = robotReducer();

      expect(newRobots).toEqual(expectedRobots);
    });
  });

  describe("When it receives a deleteRobotAction with an id of 2", () => {
    test("Then it should return an array with 'Dummy' and 'Cybermen' robot", () => {
      const inputRobots = [
        {
          _id: 1,
          name: "Dummy",
          speed: 6,
        },
        {
          _id: 2,
          name: "Tardis",
          speed: 8,
        },
        {
          _id: 3,
          name: "Cybermen",
          speed: 2,
        },
      ];
      const expectedRobots = [
        {
          _id: 1,
          name: "Dummy",
          speed: 6,
        },
        {
          _id: 3,
          name: "Cybermen",
          speed: 2,
        },
      ];
      const action = {
        type: actionTypes.deleteRobot,
        id: 2,
      };

      const newRobots = robotReducer(inputRobots, action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
