import React from "react";
import styled from "styled-components";
import Checkmark from "../img/checkmark.svg";
import Delete from "../img/delete.svg";

const TodoCard = ({ todo }) => {
  const { title, notes, completed } = todo;
  return (
    <CardContainer>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{notes}</TaskDescription>
      {!completed ? (
        <CheckmarkIcon
          src={Checkmark}
          width="42"
          height="42"
          className="todo-card__check"
          alt="タスク完了"
        />
      ) : (
        <DestroyIcon
          src={Delete}
          width="42"
          height="42"
          className="todo-card__delete"
          alt="タスク削除"
        />
      )}
    </CardContainer>
  );
};

export default TodoCard;

const CardContainer = styled.div`
  cursor: pointer;
  min-height: 200px;
  max-height: 100%;
  min-width: 300px;
  width: 50%;
  padding: 18px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-6px);
    h2 {
      font-size: 24px;
      padding-bottom: 8px;
    }
    img:hover {
      filter: brightness(1.1);
    }
  }
`;

const TaskTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 16px;
  color: #ffffff;
  text-shadow: 0px 4px 4px #6dd4ed;
  transition: all 0.2s;
`;

const TaskDescription = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.61);
  padding-bottom: 24px;
  transition: all 0.2s;
`;

const CheckmarkIcon = styled.img`
  position: absolute;
  bottom: -2px;
  right: 0;
  transition: all 0.2s;
`;

const DestroyIcon = styled(CheckmarkIcon)``;
