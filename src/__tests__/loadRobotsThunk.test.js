import actionTypes from "../redux/actions/actionTypes";
import loadRobotsThunk from "../redux/thunks/loadRobotsThunk";

describe("Given a loadRobotsThunk thunk", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch", async () => {
      const dispatch = jest.fn();
      const expectedAction = {
        robots: {
          robots: [
            {
              _id: "620ffed95302942c733bb6ef",
              name: "Bender",
              img: "https://static.wikia.nocookie.net/esfuturama/images/9/91/Bender_Bending_Rodr%C3%ADguez.png/revision/latest?cb=20130615070942",
              speed: 7,
              endurance: 6,
              creationDate: "10-03-2997",
            },
            {
              _id: "621001035302942c733bb6f1",
              name: "Kevin",
              img: "https://static.wikia.nocookie.net/final-space/images/f/f0/KvnFull.png/revision/latest?cb=20180508211103",
              speed: 8,
              endurance: 7,
              creationDate: "01-08-3207",
            },
          ],
        },
        type: actionTypes.loadRobots,
      };

      await loadRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
