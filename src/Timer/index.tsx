import "./Timer.css";

export const Timer = () => {
  return (
    <>
      <div className="timer-container">
        <div className="display-timer">
          <p className="current-time">17:59</p>
          <button className="pause-timer" id="pause-timer-button">
            PAUSE
          </button>
        </div>
      </div>
    </>
  );
};
