import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import "./leftBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { ProfileContext } from "../../context/profileContext";
import { Link } from "react-router-dom";
const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  const { hideToggle } = useContext(ProfileContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="user" onClick={hideToggle}>
          <Link className="user-container" to="/own-profile">
            <img src={currentUser.profilePic} alt="image" />
            <span> {currentUser.name} </span>
          </Link>
        </div>
        <div className="menu">
          <Link to="/friends" className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </Link>
          <Link to="/groups" className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </Link>

          <Link to="/messages" className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </Link>
          <Link to="/watch" className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </Link>
          <Link to="/gaming" className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </Link>
        </div>

        <div className="menu">
          <span className="heading">Your shortcuts</span>
          <Link className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </Link>

          <Link className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </Link>

          <Link className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </Link>
          <Link className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </Link>

          <Link className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </Link>
        </div>

        <div className="menu">
          <span className="heading">Others</span>
          <Link className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </Link>
          <Link className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </Link>
          <Link className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
