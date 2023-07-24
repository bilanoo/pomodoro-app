import "./BreakSelector.css";

export const BreakSelector = () => {
  return (
    <div className="break-container">
      <button className="break-type-button" id="pomodoro-button">
        pomodoro
      </button>
      <button className="break-type-button" id="short-break-button">
        short break
      </button>
      <button className="break-type-button" id="long-break-button">
        long break
      </button>
    </div>
  );
};
