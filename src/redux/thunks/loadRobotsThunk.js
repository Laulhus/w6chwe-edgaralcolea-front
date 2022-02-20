import { loadRobotsAction } from "../actions/actionCreators";

const loadRobotsThunk = async (dispatch) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const response = await fetch(apiURL);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};
export default loadRobotsThunk;
