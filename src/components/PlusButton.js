import styled, { keyframes } from "styled-components";
import PlusSignIcon from "../img/PlusSign.svg";

const PlusButton = () => {
  return (
    <PlusButtonContainer className="plus-button">
      <PlusSign src={PlusSignIcon} width="30" height="30" alt="" />
    </PlusButtonContainer>
  );
};

const glowAnimation = keyframes`
  from {
    
  }
  to {
    filter: brightness(1.1)
  }`;

const PlusButtonContainer = styled.button`
  cursor: pointer;
  background: linear-gradient(180deg, #74ebd5 0%, #acb6e5 100%);
  border: 6px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 120px;
  position: relative;
  transition: all 1s;
  animation: ${glowAnimation} 1s linear alternate infinite;
  &:hover {
    filter: brightness(1.1);
  }
  &:focus {
    outline: none;
  }
`;

const PlusSign = styled.img`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export default PlusButton;
