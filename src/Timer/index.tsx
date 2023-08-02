import { useEffect, useState } from "react";
import "./Timer.css";
import { Box, CircularProgress } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

interface TimerProps {
  displayTime: number;
  setRemainingTime: React.Dispatch<React.SetStateAction<number>>;
  remainingTime: number;
}

export const Timer = ({
  displayTime,
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

  console.log(remainingTime);
  function CircularProgressWithLabel() {
    const normalizedProgress = Math.min(Math.max(progress, 0), 100);

    function resetClick(): void {
      setRemainingTime(displayTime);
    }

    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={normalizedProgress}
          sx={{
            color: "var(--selectedColor)",
            backgroundColor: "#161932",
            borderRadius: "50%",
            padding: "5px",
          }}
          size="19rem"
          thickness={1}
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

          {remainingTime === 0 && (
            <ReplayIcon
              onClick={resetClick}
              sx={{ cursor: "pointer", marginTop: "20px" }}
            />
          )}
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
