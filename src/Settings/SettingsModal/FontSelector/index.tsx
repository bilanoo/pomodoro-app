import { TimeText } from "../styles";
import "./FontSelector.css";

interface FontSelectorProps {
  handleClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  fontSelector: string;
}
export const FontSelector = ({
  handleClick,
  fontSelector,
}: FontSelectorProps) => {
  return (
    <div className="font-selector-container">
      <TimeText className="time-text">FONT</TimeText>
      <div className="font-selector-content-container">
        <input
          type="radio"
          name="font-selector"
          id="kumbh-sans"
          style={{ opacity: "0" }}
        ></input>
        <label
          className={`font-selection ${
            fontSelector.includes("kumbh-sans") ? "selected" : ""
          }`}
          htmlFor="kumbh-sans"
          id="kumbh-sans"
          onClick={handleClick}
        >
          <p style={{ fontFamily: "Kumbh Sans" }}>Aa</p>
        </label>
        <input
          type="radio"
          name="font-selector"
          id="roboto"
          style={{ opacity: "0" }}
        ></input>
        <label
          className={`font-selection ${
            fontSelector.includes("roboto") ? "selected" : ""
          }`}
          htmlFor="roboto"
          id="roboto"
          onClick={handleClick}
        >
          <p style={{ fontFamily: "roboto" }}>Aa</p>
        </label>
        <input
          type="radio"
          name="font-selector"
          id="space-mono"
          style={{ opacity: "0" }}
        ></input>
        <label
          className={`font-selection ${
            fontSelector.includes("space-mono") ? "selected" : ""
          }`}
          htmlFor="space-mono"
          id="space-mono"
          onClick={handleClick}
        >
          <p style={{ fontFamily: "Space Mono" }}>Aa</p>
        </label>
      </div>
    </div>
  );
};
