import { Modal, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const StyledModal = styled(Modal)({
  "&": {
    color: "black",
    width: "22rem",
    height: "37rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignSelf: "center",
    justifySelf: "center",
  },
  "@media only screen and (min-width: 992px)": {
    width: "40rem",
    height: "30rem",
  },
});

export const CloseModalIcon = styled(CloseIcon)({
  "&": {
    marginRight: "30px",
    color: "lightgray",
  },
});

export const TimeText = styled("p")({
  "&": {
    display: "flex",
    letterSpacing: "4px",
    fontWeight: "bold",
    fontSize: "14px",
    justifyContent: "center",
  },
});
