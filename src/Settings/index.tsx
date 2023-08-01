import SettingsIcon from "@mui/icons-material/Settings";
import "./Settings.css";

interface SettingsProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Settings = ({ setOpenModal }: SettingsProps) => {
  return (
    <div className="settings-container">
      <SettingsIcon
        className="settings-icon"
        id="settings-icon"
        fontSize="large"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
};
