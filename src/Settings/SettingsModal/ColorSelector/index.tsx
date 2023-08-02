import { TimeText } from "../styles";
import "./ColorSelector.css";
import DoneIcon from "@mui/icons-material/Done";

interface ColorSelectorProps {
  colorSelected: string;
  handleClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
export const ColorSelector = ({
  colorSelected,
  handleClick,
}: ColorSelectorProps) => {
  return (
    <div className="font-selector-container">
      <TimeText className="time-text">COLOR</TimeText>
      <div className="font-selector-content-container">
        <input
          type="radio"
          name="color-selector"
          id="orange"
          style={{ opacity: "0" }}
        ></input>
        <label
          className="color-selection orange-select"
          htmlFor="orange"
          id="orange"
          onClick={handleClick}
        >
          {colorSelected.includes("orange") && <DoneIcon />}
        </label>
        <input
          type="radio"
          name="color-selector"
          id="cyan"
          style={{ opacity: "0" }}
        ></input>
        <label
          className="color-selection cyan-select"
          htmlFor="cyan"
          id="cyan"
          onClick={handleClick}
        >
          {colorSelected.includes("cyan") && <DoneIcon />}
        </label>
        <input
          type="radio"
          name="color-selector"
          id="purple"
          style={{ opacity: "0" }}
        ></input>
        <label
          className="color-selection purple-select"
          htmlFor="purple"
          id="purple"
          onClick={handleClick}
        >
          {colorSelected.includes("purple") && <DoneIcon />}
        </label>
      </div>
    </div>
  );
};
