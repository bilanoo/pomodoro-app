import { useState } from "react";
import "./App.css";
import { BreakSelector } from "./BreakSelector";
import { Settings } from "./Settings";
import { Timer } from "./Timer";
import { SettingsModal } from "./Settings/SettingsModal";

function App() {
  const [displayTimer, setTimer] = useState<number>(25 * 60);

  const [remainingTime, setRemainingTime] = useState<number>(displayTimer);
  const [buttonSelected, setButtonSelected] = useState<string>("pomodoro");
  const [fontSelected, setFontSelected] = useState<string>("kumbh-sans");
  const [colorSelected, setColorSelected] = useState<string>("orange");
  const [pomodoroTimer, setPomodoroTimer] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [openModal, setOpenModal] = useState(false);

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (event.currentTarget.value === "pomodoro") {
      setTimer(pomodoroTimer * 60);
      setRemainingTime(pomodoroTimer * 60);
      setButtonSelected("pomodoro");
    }

    if (event.currentTarget.value === "short-break") {
      setTimer(shortBreak * 60);
      setRemainingTime(shortBreak * 60);
      setButtonSelected("short-break");
    }

    if (event.currentTarget.value === "long-break") {
      setTimer(longBreak * 60);
      setRemainingTime(longBreak * 60);
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
          {openModal && (
            <SettingsModal
              fontSelector={fontSelected}
              setFontSelected={setFontSelected}
              setPomodoroTimer={setPomodoroTimer}
              setShortBreak={setShortBreak}
              setLongBreak={setLongBreak}
              pomodoroTimer={pomodoroTimer}
              shortBreak={shortBreak}
              longBreak={longBreak}
              setOpenModal={setOpenModal}
              colorSelected={colorSelected}
              setColorSelected={setColorSelected}
            />
          )}
          <Timer
            displayTime={displayTimer}
            remainingTime={remainingTime}
            setRemainingTime={setRemainingTime}
          />
          <Settings setOpenModal={setOpenModal} />
        </div>
      </div>
    </>
  );
}

export default App;
