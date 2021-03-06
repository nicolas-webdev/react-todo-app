import PlusButton from "./components/PlusButton";
import ModalPanel from "./components/ModalPanel";
import LeftPanel from "./components/LeftPanel";

function App() {
  return (
    <main className="App">
      <LeftPanel />
      {/* <PlusButton /> */}
      {/* set visibility conditionally based on Redux state */}
      <ModalPanel />
    </main>
  );
}

export default App;
