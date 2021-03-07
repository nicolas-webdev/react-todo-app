import styled from "styled-components";
import PlusButton from "./components/PlusButton";
import ModalPanel from "./components/ModalPanel";
import LeftPanel from "./components/LeftPanel";
import CategorySlider from "./components/CategorySlider";
import TodoCard from "./components/TodoCard";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Main className="App">
        <ModalPanel />
        {/* modal panel is used for both, adding and editing tasks; set visibility hide/show based on redux toggle state */}
        {/* <PlusButton /> */}
        {/* if tasks are 0, absolute 50-50, else absolute 30-30 */}
        <SubArea className="sub-area">
          <LeftPanel />
        </SubArea>
        <MainArea className="main-area">
          <CategorySliderContainer>
            <CategorySlider category={"今"} />
          </CategorySliderContainer>
          <TodosContainer>
            <TodoCard
              todo={{
                title: "タスクのタイトル",
                notes:
                  "ノートアイウエオさシスセトたちつてと何ぬねのは皮膚へ保まみむめも",
                completed: false,
              }}
            />
            <TodoCard
              todo={{
                title: "タスクのタイトル",
                notes:
                  "ノートアイウエオさシスセトたちつてと何ぬねのは皮膚へ保まみむめも",
                completed: false,
              }}
            />
            <TodoCard
              todo={{
                title: "タスクのタイトル",
                notes:
                  "ノートアイウエオさシスセトさシスセトさシスセトさシスセトたちつてと何ぬねのは皮膚へ保まみむめも",
                completed: false,
              }}
            />
            <TodoCard
              todo={{
                title: "タスクのタイトル",
                notes:
                  "ノートアイウエオさシスセトたちつてと何ぬねのは皮膚へ保まみむめも",
                completed: false,
              }}
            />
            <TodoCard
              todo={{
                title: "タ¥ル",
                notes: "皮膚へ保まみむめも",
                completed: true,
              }}
            />
          </TodosContainer>
        </MainArea>
      </Main>
    </Provider>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategorySliderContainer = styled.div`
  margin-bottom: 60px;
`;
const TodosContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 30px;
`;

export default App;
