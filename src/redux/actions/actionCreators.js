import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotAction = (id) => ({
  type: actionTypes.loadRobot,
  id,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});
