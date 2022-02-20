import { deleteRobotAction } from "../actions/actionCreators";

const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}delete/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export default deleteRobotThunk;
