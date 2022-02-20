import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateRobotPage = () => {
  const blankForm = {
    name: "",
    img: "",
    speed: "",
    endurance: "",
    creationDate: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const isFormInvalid =
    formData.name === "" ||
    formData.img === "" ||
    formData.speed === "" ||
    formData.endurance === "" ||
    formData.creationDate === "";

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  return (
    <div className="header">
      <ul className="nav row align-items-center justify-content-center navbar__list">
        <li className="col-4 d-flex justify-content-center nav-link navbar__icon"></li>
      </ul>
      <div className="main row justify-content-center align-items-center">
        <div className="form-container col-8">
          <form noValidate autoComplete="off">
            <div className="form">
              <label htmlFor="name">Name:</label>{" "}
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={changeData}
              />
              <label htmlFor="img">Image Url:</label>{" "}
              <input
                type="text"
                id="img"
                value={formData.img}
                onChange={changeData}
              />
              <label htmlFor="speed">Speed:</label>{" "}
              <input
                type="number"
                id="speed"
                value={formData.speed}
                onChange={changeData}
                min={0}
                max={10}
              />
              <label htmlFor="endurance">Endurance:</label>{" "}
              <input
                type="number"
                id="endurance"
                value={formData.endurance}
                onChange={changeData}
                min={0}
                max={10}
              />
              <label htmlFor="creationDate">Created on:</label>{" "}
              <input
                type="text"
                id="creationDate"
                value={formData.creationDate}
                onChange={changeData}
              />
            </div>
            <button type="submit" disabled={isFormInvalid}>
              Create!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRobotPage;
