import "./SettingsModal.css";
import { Divider } from "@mui/material";
import { CloseModalIcon, StyledModal, TimeText } from "./styles";
import { GenericInputBox } from "./GenericInputBox";
import { Dispatch, SetStateAction } from "react";
interface SettingsModalProps {
  pomodoroTimer: number;
  shortBreak: number;
  longBreak: number;
  setPomodoroTimer: Dispatch<SetStateAction<number>>;
  setShortBreak: Dispatch<SetStateAction<number>>;
  setLongBreak: Dispatch<SetStateAction<number>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SettingsModal = ({
  pomodoroTimer,
  shortBreak,
  longBreak,
  setPomodoroTimer,
  setShortBreak,
  setLongBreak,
  setOpenModal,
}: SettingsModalProps) => {
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

        <div className="timer-settings-container">
          <TimeText className="time-text">FONT</TimeText>
          <div className="font-selector-container">
            <input type="radio" name="font-selector" id="font-selector"></input>
            <label
              className="font-selection"
              htmlFor="font-selector"
              id="first-font"
            ></label>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
