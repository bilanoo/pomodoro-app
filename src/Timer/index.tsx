import { useEffect, useState } from "react";
import "./Timer.css";
import { Box, CircularProgress } from "@mui/material";

interface TimerProps {
  displayTime: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setRemainingTime: React.Dispatch<React.SetStateAction<number>>;
  remainingTime: number;
}

export const Timer = ({
  displayTime,
  setTime,
  remainingTime,
  setRemainingTime,
}: TimerProps) => {
  const [startAndPause, setStartAndPause] = useState<boolean>(false);

  useEffect(() => {
    let timer = 0;

    if (startAndPause && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [remainingTime, startAndPause]);

  console.log(displayTime);
  // Calculate the progress as a percentage
  const progress = ((displayTime - remainingTime) / displayTime) * 100;

  // Format time to "mm:ss"
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  function CircularProgressWithLabel() {
    const normalizedProgress = Math.min(Math.max(progress, 0), 100);
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={normalizedProgress}
          sx={{ color: "#f87070" }}
          size="20rem"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="current-time">{formatTime(remainingTime)}</p>
          <button
            type="button"
            className="pause-timer"
            id="pause-timer-button"
            onClick={handleClick}
          >
            {startAndPause ? "PAUSE" : "START"}
          </button>
        </Box>
      </Box>
    );
  }

  function handleClick(): void {
    if (displayTime > 0) {
      setStartAndPause((prev) => !prev);
    }
  }

  return (
    <>
      <div className="timer-container">
        <CircularProgressWithLabel />
      </div>
    </>
  );
};
