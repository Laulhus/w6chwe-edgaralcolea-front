import { deleteRobotAction } from "../actions/actionCreators";

const deleteRobotThunk = (id) => async (dispatch) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiURL}delete/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export default deleteRobotThunk;
