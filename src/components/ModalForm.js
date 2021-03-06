import React, { useState } from "react";
import styled from "styled-components";
import ModalInput from "./ModalInput";
import UrgencyButton from "./UrgencyButton";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";

const ModalForm = () => {
  const urgencies = ["近", "今", "後"];
  const todoSchema = {
    id: "",
    title: "",
    urgency: urgencies[1],
    notes: "",
  };
  const [todo, setTodo] = useState(todoSchema);
  const urgencyHandler = ({ target }) => {
    setTodo({ ...todo, urgency: target.innerText });
  };
  return (
    <StyledModalForm className="modal-form">
      <ModalInput todo={todo} setTodo={setTodo} />
      <UrgencySelector>
        {urgencies.map((el, i) => (
          <div key={i} onClick={urgencyHandler}>
            <UrgencyButton
              key={el}
              status={el === todo.urgency ? "active" : "inactive"}
              urgency={el}
            />
          </div>
        ))}
      </UrgencySelector>
      <TextArea todo={todo} setTodo={setTodo} />
      <Buttons>
        <CancelButton>キャンセル</CancelButton>
        <SubmitButton todo={todo} setTodo={setTodo} schema={todoSchema} />
      </Buttons>
    </StyledModalForm>
  );
};

const StyledModalForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const UrgencySelector = styled.div`
  width: 240px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CancelButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 42px;
  padding: 8px, 44px;
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
`;

export default ModalForm;
