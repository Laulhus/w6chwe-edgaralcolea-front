import { createRobotAction } from "../actions/actionCreators";

const createRobotThunk = (robot) => async (dispatch) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiURL}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  if (response.ok) {
    dispatch(createRobotAction(response.body));
  }
};

export default createRobotThunk;
