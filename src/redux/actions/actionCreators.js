import actionTypes from "./actionTypes";

const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});
export default loadRobotsAction;
