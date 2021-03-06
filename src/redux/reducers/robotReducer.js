import actionTypes from "../actions/actionTypes";

const robotReducer = (currentRobots = [], action = {}) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobots = [...currentRobots, action.robot];
      break;
    case actionTypes.deleteRobot:
      newRobots = currentRobots.filter((robot) => robot._id !== action.id);
      break;
    default:
      newRobots = [...currentRobots];
  }
  return newRobots;
};

export default robotReducer;
