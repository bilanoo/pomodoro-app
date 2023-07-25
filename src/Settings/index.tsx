import SettingsIcon from "@mui/icons-material/Settings";
import "./Settings.css";
export const Settings = () => {
  return (
    <div className="settings-container">
      <SettingsIcon
        className="settings-icon"
        id="settings-icon"
        fontSize="large"
      />
    </div>
  );
};
