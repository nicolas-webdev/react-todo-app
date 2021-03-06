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
      <SubmitButton todo={todo} setTodo={setTodo} schema={todoSchema} />
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
  display: flex;
  justify-content: space-between;
`;

export default ModalForm;
