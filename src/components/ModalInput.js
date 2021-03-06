import styled from "styled-components";

const ModalInput = ({ todo, setTodo }) => {
  const handleChange = ({ target: { value } }) => {
    setTodo({ ...todo, title: value });
  };
  return (
    <StyledInput
      className="modal-input"
      placeholder="タイトル"
      type="text"
      value={todo.title}
      onChange={handleChange}
    />
  );
};

const StyledInput = styled.input`
  width: 334px;
  max-width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 16px;
  line-height: 23px;
  color: #252525;
  padding: 2px 14px 0px;
  caret-color: rgb(0, 200, 0);
  &:focus {
    outline: white;
  }
`;

export default ModalInput;
