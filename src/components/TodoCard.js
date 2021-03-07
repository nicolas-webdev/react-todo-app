import React from "react";
import styled from "styled-components";
import Checkmark from "../img/checkmark.svg";

const TodoCard = () => {
  return (
    <CardContainer>
      <TaskTitle>タスクのタイトル</TaskTitle>
      <TaskDescription>
        ノートアイウエオさシスセトたちつてと何ぬねのは皮膚へ保まみむめも
      </TaskDescription>
      <CheckmarkIcon
        src={Checkmark}
        width="42"
        height="42"
        className="todo-card__check"
        alt="タスク完了"
      />
    </CardContainer>
  );
};

export default TodoCard;

const CardContainer = styled.div`
  cursor: pointer;
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
  justify-content: space-between;
  position: relative;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    img {
      transform: translate(-5px, -5px);
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const TaskTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 16px;
  color: #ffffff;
  text-shadow: 0px 4px 4px #6dd4ed;
`;

const TaskDescription = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.61);
  padding-bottom: 8px;
`;

const CheckmarkIcon = styled.img`
  position: absolute;
  bottom: -2px;
  right: 0;
  transition: all 0.3s;
`;
