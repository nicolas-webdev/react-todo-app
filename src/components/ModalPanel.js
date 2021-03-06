import styled from "styled-components";
import ModalForm from "./ModalForm";

const ModalPanel = () => {
  return (
    <StyledModalPanel className="modal-panel">
      <ModalForm />
    </StyledModalPanel>
  );
};

const StyledModalPanel = styled.div`
  width: 394px;
  max-width: 90vw;
  height: 485px;
  background: linear-gradient(180deg, #74ebd5 0%, #acb6e5 100%);
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1889;
`;

export default ModalPanel;
