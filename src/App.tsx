import "./App.css";
import { BreakSelector } from "./BreakSelector";
import { Settings } from "./Settings";
import { Timer } from "./Timer";

function App() {
  return (
    <>
      <div className="pomodoro-container">
        <h1>pomodoro</h1>
        <BreakSelector />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Timer />
          <Settings />
        </div>
      </div>
    </>
  );
}

export default App;
