import "./App.css";
import { BreakSelector } from "./BreakSelector";
import { Timer } from "./Timer";

function App() {
  return (
    <>
      <div className="pomodoro-container">
        <h1>pomodoro</h1>
        <BreakSelector />
        <Timer />
      </div>
    </>
  );
}

export default App;
