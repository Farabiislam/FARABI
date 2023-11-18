import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { ProfileContext } from "../../context/profileContext";


const Share = () => {
  const { shareModalToggle,} = useContext(ProfileContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind... ${currentUser.name}?`}
            onClick={shareModalToggle}
          />
        </div>
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item" onClick={shareModalToggle}>
                <img src={Image} alt="" />
                <span>Image</span>
              </div>
            </label>
            <div className="item" onClick={shareModalToggle}>
              <img src={Map} alt="" />
              <span>Location</span>
            </div>
            <div className="item" onClick={shareModalToggle}>
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
