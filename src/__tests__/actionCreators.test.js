import loadRobotsAction from "../redux/actions/actionCreators";

describe("Given a loadCharacterAction function", () => {
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
        robots: robots.robots,
      };
      const action = loadRobotsAction(robots);

      expect(action).toEqual(expectedAction);
    });
  });
});
