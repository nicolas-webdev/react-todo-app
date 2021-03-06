import PlusButton from "./components/PlusButton";
import ModalPanel from "./components/ModalPanel";
import LeftPanel from "./components/LeftPanel";
import CategorySlider from "./components/CategorySlider";

function App() {
  return (
    <main className="App">
      <LeftPanel />
      {/* <PlusButton /> */}
      {/* set visibility conditionally based on Redux state */}
      {/* <ModalPanel /> */}
      <div className="main-area">
        <CategorySlider category={"今"} />
      </div>
    </main>
  );
}

export default App;
