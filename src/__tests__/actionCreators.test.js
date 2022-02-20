import {
  deleteRobotAction,
  loadRobotAction,
  loadRobotsAction,
} from "../redux/actions/actionCreators";

describe("Given a loadRobotsAction function", () => {
  describe("When called with an array of robots", () => {
    test('Then it should return an action object with type: "load-robots" and the array', () => {
      const robots = [
        {
          name: "Tardis",
          speed: 8,
        },
        {
          name: "Cybermen",
          speed: 2,
        },
      ];
      const expectedAction = {
        type: "load-robots",
        robots,
      };
      const action = loadRobotsAction(robots);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadRobotAction function", () => {
  describe("When called with an id", () => {
    test('Then it should return an action object with type: "load-robot" and the id', () => {
      const id = 3;
      const expectedAction = {
        type: "load-robot",
        id,
      };
      const action = loadRobotAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteRobotAction function", () => {
  describe("When called with an id", () => {
    test('Then it should return an action object with type: "delete-robot" and the id', () => {
      const id = 5;
      const expectedAction = {
        type: "delete-robot",
        id: id,
      };
      const action = deleteRobotAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
