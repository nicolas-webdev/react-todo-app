import React from "react";
import styled from "styled-components";

const SubmitButton = ({ todo, setTodo, schema }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo({ ...todo, ...schema });
  };
  return (
    <StyledSubmitButton onClick={handleSubmit} className="submit-button">
      追加
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
