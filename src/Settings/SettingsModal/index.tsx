import "./SettingsModal.css";
import { Divider } from "@mui/material";
import { CloseModalIcon, StyledModal, TimeText } from "./styles";
import { GenericInputBox } from "./GenericInputBox";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FontSelector } from "./FontSelector";
import { ColorSelector } from "./ColorSelector";
interface SettingsModalProps {
  pomodoroTimer: number;
  shortBreak: number;
  longBreak: number;
  fontSelector: string;
  colorSelected: string;
  setColorSelected: React.Dispatch<SetStateAction<string>>;
  setFontSelected: React.Dispatch<SetStateAction<string>>;
  setPomodoroTimer: Dispatch<SetStateAction<number>>;
  setShortBreak: Dispatch<SetStateAction<number>>;
  setLongBreak: Dispatch<SetStateAction<number>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SettingsModal = ({
  pomodoroTimer,
  shortBreak,
  longBreak,
  fontSelector,
  colorSelected,
  setColorSelected,
  setFontSelected,
  setPomodoroTimer,
  setShortBreak,
  setLongBreak,
  setOpenModal,
}: SettingsModalProps) => {
  function handleClick(
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ): void {
    setFontSelected(event.currentTarget.id);
  }

  function onColorClick(
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ): void {
    setColorSelected(event.currentTarget.id);
  }
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const inputtedID = event.currentTarget.id;
    const inputValue = event.currentTarget.value;
    const onlyNumbersRegex = /^\d{0,3}$/;
    const isInputValid = onlyNumbersRegex.test(inputValue);

    if (inputtedID === "pomodoro" && isInputValid) {
      setPomodoroTimer(Number.parseInt(event.currentTarget.value));
    }

    if (inputtedID === "short-break" && isInputValid) {
      setShortBreak(Number.parseInt(event.currentTarget.value));
    }

    if (inputtedID === "long-break" && isInputValid) {
      setLongBreak(Number.parseInt(event.currentTarget.value));
    }
  }

  // This useEffect hook will update the CSS variable whenever fontSelected changes.
  useEffect(() => {
    if (fontSelector.includes("kumbh-sans")) {
      document.documentElement.style.setProperty(
        "--main-font-family",
        "Kumbh Sans, sans-serif"
      );
    }

    if (fontSelector.includes("roboto")) {
      document.documentElement.style.setProperty(
        "--main-font-family",
        "Roboto Slab, sans-serif"
      );
    }

    if (fontSelector.includes("space-mono")) {
      document.documentElement.style.setProperty(
        "--main-font-family",
        "Space Mono, sans-serif"
      );
    }
  }, [fontSelector]);

  // This useEffect hook will update the CSS variable whenever colotSelected changes.
  useEffect(() => {
    if (colorSelected.includes("orange")) {
      document.documentElement.style.setProperty("--selectedColor", "#f87070");
    }

    if (colorSelected.includes("cyan")) {
      document.documentElement.style.setProperty("--selectedColor", "#70f3f8");
    }

    if (colorSelected.includes("purple")) {
      document.documentElement.style.setProperty("--selectedColor", "#d881f8");
    }
  }, [colorSelected]);
  return (
    <StyledModal
      open={true}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "white",
            borderRadius: "24px",
          },
        },
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gridRowStart: "0",
            gridRowEnd: "1",
            marginLeft: "40px",
            fontWeight: "bold",
          }}
        >
          <h1>Settings</h1>

          <CloseModalIcon
            onClick={() => setOpenModal(false)}
            sx={{ cursor: "pointer" }}
          />
        </div>
        <Divider />

        <div className="timer-settings-container">
          <TimeText className="time-text">TIME (MINUTES)</TimeText>
          <GenericInputBox
            setSpecificTimer={setPomodoroTimer}
            typeText="pomodoro"
            value={pomodoroTimer}
            idValue="pomodoro"
            handleChange={handleChange}
          />
          <GenericInputBox
            setSpecificTimer={setShortBreak}
            typeText="short break"
            value={shortBreak}
            idValue="short-break"
            handleChange={handleChange}
          />
          <GenericInputBox
            setSpecificTimer={setLongBreak}
            typeText="long break"
            value={longBreak}
            idValue="long-break"
            handleChange={handleChange}
          />
        </div>
        <Divider
          sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
        />

        <FontSelector handleClick={handleClick} fontSelector={fontSelector} />

        <Divider
          sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
        />

        <ColorSelector
          colorSelected={colorSelected}
          handleClick={onColorClick}
        />
      </div>
    </StyledModal>
  );
};
