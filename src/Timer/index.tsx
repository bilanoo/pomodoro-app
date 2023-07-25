import { useEffect, useState } from "react";
import "./Timer.css";

interface TimerProps {
  displayTime: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export const Timer = ({ displayTime, setTime }: TimerProps) => {
  const [startAndPause, setStartAndPause] = useState<boolean>(false);

  useEffect(() => {
    let timer = 0;

    if (startAndPause && displayTime > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    }

    return () => clearInterval(timer);
  }, [displayTime, startAndPause]);

  // Format time to "mm:ss"
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  function handleClick(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (!startAndPause) {
      setStartAndPause(true);
    } else {
      setStartAndPause(false);
    }
  }

  return (
    <>
      <div className="timer-container">
        <div className="display-timer">
          <p className="current-time">{formatTime(displayTime)}</p>
          <button
            type="button"
            className="pause-timer"
            id="pause-timer-button"
            onClick={handleClick}
          >
            {startAndPause ? "PAUSE" : "START"}
          </button>
        </div>
      </div>
    </>
  );
};
