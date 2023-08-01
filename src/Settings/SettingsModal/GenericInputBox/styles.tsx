import { TextField, styled } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const TimeText = styled("p")({
  "&": {
    display: "flex",
    letterSpacing: "4px",
    fontWeight: "bold",
    fontSize: "14px",
    justifyContent: "center",
  },
});

export const StyledInputTextfield = styled(TextField)({
  "&": {
    backgroundColor: "lightgray",
    border: "none",
    borderRadius: "10px",
    width: "10rem",
    height: "3rem",
  },
  ".MuiInputBase-input": {
    borderColor: "transparent",
    border: "none",
  },
  ".MuiInputBase-adornedEnd": {
    borderColor: "transparent",
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export const ArrowUpIcon = styled(KeyboardArrowUpIcon)({
  "&:hover": {
    cursor: "pointer",
  },
});

export const ArrowDown = styled(KeyboardArrowDownIcon)({
  "&:hover": {
    cursor: "pointer",
  },
});
