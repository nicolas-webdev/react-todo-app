import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { saveTodo } from "../redux/todoSlice";

const SubmitButton = ({ todo, setTodo, schema }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: Date.now().valueOf(),
      completed: false,
    };
    dispatch(saveTodo(newTodo));
    setTodo({ ...schema });

    // Change toggle state with Redux
  };
  return (
    <StyledSubmitButton onClick={handleSubmit} className="submit-button">
      保存
    </StyledSubmitButton>
  );
};

const StyledSubmitButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 42px;
  padding: 8px, 44px;
  background: linear-gradient(180deg, #74ebd5 0%, #acb6e5 100%);
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.05);
  }
`;

export default SubmitButton;
