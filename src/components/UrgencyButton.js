import styled from "styled-components";

const UrgencyButton = ({ urgency, status }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledUrgencyButton
      onClick={handleSubmit}
      className={`urgency-button ${status}`}
    >
      <p>{urgency}</p>
    </StyledUrgencyButton>
  );
};

const StyledUrgencyButton = styled.div`
  cursor: pointer;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-top: -3px;
    margin-bottom: 0;
  }
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    background: #6dd4ed;
    font-size: 24px;
    color: #ffffff;
  }
  &.inactive {
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    font-weight: bold;
    font-size: 24px;
    color: #77c0ca;
  }
`;

export default UrgencyButton;
