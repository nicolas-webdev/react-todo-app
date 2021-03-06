import React from "react";
import styled from "styled-components";

const TextArea = ({ todo, setTodo }) => {
  const handleChange = ({ target: { value } }) => {
    setTodo({ ...todo, notes: value });
  };
  return (
    <StyledTextArea
      value={todo.notes}
      onChange={handleChange}
      placeholder="詳細"
    ></StyledTextArea>
  );
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 186px;
  padding: 14px 20px;
  resize: none;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  caret-color: rgb(0, 200, 0);
  font-size: 16px;
  line-height: 23px;
  font-family: "Noto Sans JP", sans-serif;
  color: rgba(0, 0, 0, 0.7);
  &:focus {
    outline: none;
  }
`;

export default TextArea;
