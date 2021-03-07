import styled from "styled-components";
import PlusButton from "./components/PlusButton";
import ModalPanel from "./components/ModalPanel";
import LeftPanel from "./components/LeftPanel";
import CategorySlider from "./components/CategorySlider";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <Main className="App">
      <SubArea className="sub-area">
        <LeftPanel />
        {/* <PlusButton /> */}
        {/* set visibility conditionally based on Redux state */}
        {/* <ModalPanel /> */}
      </SubArea>
      <MainArea className="main-area">
        {/* <CategorySlider category={"今"} /> */}
        <TodoCard />
      </MainArea>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  /* justify-content: center;*/
  align-items: center;
  background: linear-gradient(107.56deg, #74ebd5 0%, #acb6e5 100%);
`;

const SubArea = styled.div`
  width: 30vw;
  height: 90vh;
  max-width: 400px;
  margin: 30px;
`;

const MainArea = styled.div`
  width: 70vw;
  height: 90vh;
  max-width: 100%;
  margin: 0px;
  padding: 0px;
`;

export default App;
