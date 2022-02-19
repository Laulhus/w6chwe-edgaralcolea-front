import actionTypes from "../actionTypes";

const robotReducer = (currentRobots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    default:
      newRobots = [...currentRobots];
  }
  return newRobots;
};

export default robotReducer;
