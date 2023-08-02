import { InputAdornment } from "@mui/material";
import { ArrowDown, ArrowUpIcon, StyledInputTextfield } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface GenericInputBoxProps {
  typeText: string;
  idValue: string;
  value: number;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setSpecificTimer: Dispatch<SetStateAction<number>>;
}
export const GenericInputBox = ({
  typeText,
  handleChange,
  setSpecificTimer,
  value,
  idValue,
}: GenericInputBoxProps) => {
  function upArrowClick(): void {
    setSpecificTimer((prevState) => prevState + 1);
  }

  function downArrowClick(): void {
    setSpecificTimer((prevState) =>
      prevState >= 1 ? prevState - 1 : prevState
    );
  }

  return (
    <div className="change-timer-length">
      <p
        className="change-timer-type-text"
        style={{ color: "#B5B4BA", marginTop: "auto", marginBottom: "auto" }}
      >
        {typeText}
      </p>

      <StyledInputTextfield
        type="number"
        value={value}
        sx={{ marginBottom: "20px", marginLeft: "auto" }}
        onChange={handleChange}
        id={idValue}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ border: "none", borderColor: "transparent" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowUpIcon onClick={upArrowClick} />
                <ArrowDown onClick={downArrowClick} />
              </div>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
