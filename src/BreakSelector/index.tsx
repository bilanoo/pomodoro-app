import "./BreakSelector.css";

export const BreakSelector = () => {
  return (
    <div className="break-container">
      <button
        className="break-type-button"
        id="pomodoro-button"
        style={{ paddingLeft: "40px" }}
      >
        pomodoro
      </button>
      <button className="break-type-button" id="short-break-button">
        short break
      </button>
      <button
        className="break-type-button"
        id="long-break-button"
        style={{ paddingRight: "40px" }}
      >
        long break
      </button>
    </div>
  );
};
