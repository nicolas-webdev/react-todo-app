import styled from "styled-components";
import PlusButton from "./components/PlusButton";
import ModalPanel from "./components/ModalPanel";
import LeftPanel from "./components/LeftPanel";
import CategorySlider from "./components/CategorySlider";
import TodoCard from "./components/TodoCard";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/toggleSlice";

function App() {
  const toggleState = useSelector(({ toggle }) => toggle);
  const todoList = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  return (
    <Main className="App">
      <PlusButton position={`${todoList.length === 0 ? "center" : "bottom"}`} />

      {todoList.length !== 0 && (
        <>
          <SubArea className="sub-area">
            <LeftPanel />
          </SubArea>
          <MainArea onClick={() => toggleState && dispatch(toggle())}>
            <CategorySliderContainer>
              <CategorySlider category={"今"} />
            </CategorySliderContainer>
            <TodosContainer>
              {todoList.map((current) => (
                <TodoCard todo={current} />
              ))}
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
        </>
      )}

      {toggleState && <ModalPanel />}
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
  margin-right: 0;
`;

const MainArea = styled.div`
  width: 70vw;
  height: 90vh;
  max-width: 100%;
  margin: 0px;
  padding: 0px 30px;
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
