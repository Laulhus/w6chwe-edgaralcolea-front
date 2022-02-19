import actionTypes from "./actionTypes";

const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots: robots.robots,
});
export default loadRobotsAction;
