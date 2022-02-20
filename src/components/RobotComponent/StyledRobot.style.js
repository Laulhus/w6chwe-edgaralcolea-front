import styled from "styled-components";

const StyledRobot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgb(73, 53, 54);
  border-radius: 20px;
  background-color: bisque;
  margin-top: 15px;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
    transform: scale(1.1);
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    padding-top: 10px;
  }
  img {
    height: 230px;
    width: 200px;
    object-fit: cover;
  }
  .icon {
    padding-top: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #d32c2c;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
export default StyledRobot;
