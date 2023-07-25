import { useState } from "react";
import "./App.css";
import { BreakSelector } from "./BreakSelector";
import { Settings } from "./Settings";
import { Timer } from "./Timer";

function App() {
  const [displayTimer, setTimer] = useState<number>(20 * 60);
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
          <Timer displayTime={displayTimer} setTime={setTimer} />
          <Settings />
        </div>
      </div>
    </>
  );
}

export default App;
