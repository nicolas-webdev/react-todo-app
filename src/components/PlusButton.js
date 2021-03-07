import styled, { keyframes } from "styled-components";
import PlusSignIcon from "../img/PlusSign.svg";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/toggleSlice";

const PlusButton = ({ position }) => {
  const dispatch = useDispatch();
  return (
    <PlusButtonContainer
      className={`plus-button ${position}`}
      onClick={() => dispatch(toggle())}
    >
      <IconContainer>
        <PlusSign src={PlusSignIcon} width="30" height="30" alt="" />
      </IconContainer>
    </PlusButtonContainer>
  );
};

const glowAnimation = keyframes`
  from {
    filter: brightness(1)
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
  transition: all 1s;
  animation: ${glowAnimation} 1s linear alternate infinite;
  transform-origin: center;
  position: absolute;
  transform: translate(-50%, -50%);
  &.center {
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
  }
  &.bottom {
    bottom: 0;
    right: 0;
    width: 90px;
    height: 90px;
  }
  &:hover {
    filter: brightness(1.1);
    transform: translate(-50%, -50%) scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PlusSign = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PlusButton;
