import { Link } from "react-router-dom";
import "./profileSettings.scss"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useContext } from "react";
import { DarkMode } from "../../context/darkMode";
import { ProfileContext } from "../../context/profileContext";

const ProfileSettings = () => {
  
  const { toggle, darkMode } = useContext(DarkMode);
  const { profileToggle } = useContext(ProfileContext);

  return (
    <div className="profileSettings">
      <div className="menus">
        <div className="item" onClick={profileToggle}>
          <Link to="/own-profile" className="link-profile">
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Profile settings</span>
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <SettingsOutlinedIcon className="icon" />
            <span>Settings & privacy</span>
          </Link>
        </div>
        <div className="item " onClick={toggle}>
          <div className="link">
            {darkMode ? (
              <WbSunnyOutlinedIcon className="icon" />
            ) : (
              <DarkModeOutlinedIcon className="icon" />
            )}
            <span>Dark / Light</span>
          </div>
        </div>
        <div className="item">
          <Link className="link">
            <HelpOutlineOutlinedIcon className="icon" />
            <span>Help & Supports</span>
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <InfoOutlinedIcon className="icon" />
            <span>AboutUs</span>
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <LogoutOutlinedIcon className="icon" />
            <span>Log-Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings