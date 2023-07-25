import { useState } from "react";
import "./App.css";
import { BreakSelector } from "./BreakSelector";
import { Settings } from "./Settings";
import { Timer } from "./Timer";

function App() {
  const [displayTimer, setTimer] = useState<number>(0.5 * 60);

  const [remainingTime, setRemainingTime] = useState<number>(displayTimer);
  const [buttonSelected, setButtonSelected] = useState<string>("pomodoro");

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (event.currentTarget.value === "pomodoro") {
      setTimer(25 * 60);
      setRemainingTime(25 * 60);
      setButtonSelected("pomodoro");
    }

    if (event.currentTarget.value === "short-break") {
      setTimer(5 * 60);
      setRemainingTime(5 * 60);
      setButtonSelected("short-break");
    }

    if (event.currentTarget.value === "long-break") {
      setTimer(15 * 60);
      setRemainingTime(15 * 60);
      setButtonSelected("long-break");
    }
  }
  return (
    <>
      <div className="pomodoro-container">
        <h1>pomodoro</h1>
        <BreakSelector
          handleClick={handleClick}
          buttonSelected={buttonSelected}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Timer
            displayTime={displayTimer}
            setTime={setTimer}
            remainingTime={remainingTime}
            setRemainingTime={setRemainingTime}
          />
          <Settings />
        </div>
      </div>
    </>
  );
}

export default App;
