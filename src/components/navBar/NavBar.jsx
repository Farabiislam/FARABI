import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
/* import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; */
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PeopleIcon from "@mui/icons-material/People";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { ProfileContext } from "../../context/profileContext";
import ProfileSettings from "../profileSettings/ProfileSettings";
import Notifications from "../notifications/Notifications";
import Chats from "../chats/Chats";
import Menu from "../menu/Menu";
import SeeChat from "../chats/SeeChat";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const { profileToggle, ownProfile } = useContext(ProfileContext);
  const { notificationToggle, notification } = useContext(ProfileContext);
  const { chatToggle, chat } = useContext(ProfileContext);
  const { menuToggle, menu } = useContext(ProfileContext);
  const { homeToggle } = useContext(ProfileContext);
  const { seeChat } = useContext(ProfileContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link
          to="/"
          className="logo"
          onClick={homeToggle}
        >
          <span>F</span>ARABI
        </Link>
        <Link to="/" className="m-icon" onClick={homeToggle}>
          <HomeOutlinedIcon className="home-icon " />
        </Link>
        {/*   <PersonOutlinedIcon className="icon" /> */}
        <GridViewOutlinedIcon
          className={` icon m-icon ${menu ? "active" : " "}`}
          onClick={menuToggle}
        />
        <div className="m_div1">
          <div className="m_search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search... " />
          </div>

          <DensityMediumIcon
            className={`icon  ${menu ? "active" : " "}`}
            onClick={menuToggle}
          />
        </div>

        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search... " />
        </div>

        {menu && <Menu />}
      </div>

      <div className="right">
        <div className="m-div">
          <Link to="/" onClick={homeToggle}>
            <HomeOutlinedIcon className="m-icon " />
          </Link>
          <Link to="/" onClick={homeToggle}>
            <PeopleIcon className="m-icon " />
          </Link>
          <Link to="/" onClick={homeToggle}>
            <OndemandVideoIcon className="m-icon " />
          </Link>
        </div>
        <EmailOutlinedIcon
          className={` icon ${chat ? "active" : " "}`}
          onClick={chatToggle}
        />
        <NotificationsOutlinedIcon
          className={` icon ${notification ? "active" : " "}`}
          onClick={notificationToggle}
        />

        <div className="user" onClick={profileToggle}>
          <img src={currentUser.profilePic} alt="img" />
          {/*  <span>{currentUser.name}</span> */}
        </div>
        {chat && <Chats />}
        {seeChat && <SeeChat />}
        {notification && <Notifications />}
        {ownProfile && <ProfileSettings />}
      </div>
    </div>
  );
};

export default NavBar;
