import "./BreakSelector.css";

interface BreakSelectorProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonSelected: string;
}
export const BreakSelector = ({
  handleClick,
  buttonSelected,
}: BreakSelectorProps) => {
  return (
    <div className="break-container">
      <button
        className={`break-type-button ${
          buttonSelected === "pomodoro" ? "active" : ""
        }`}
        id="pomodoro-button"
        style={{ marginLeft: "40px" }}
        onClick={handleClick}
        value={"pomodoro"}
      >
        pomodoro
      </button>
      <button
        className={`break-type-button ${
          buttonSelected === "short-break" ? "active" : ""
        }`}
        id="short-break-button"
        onClick={handleClick}
        value={"short-break"}
      >
        short break
      </button>
      <button
        className={`break-type-button ${
          buttonSelected === "long-break" ? "active" : ""
        }`}
        id="long-break-button"
        style={{ marginRight: "40px" }}
        onClick={handleClick}
        value={"long-break"}
      >
        long break
      </button>
    </div>
  );
};
