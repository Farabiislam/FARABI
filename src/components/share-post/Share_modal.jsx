import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";
import "./share_modal.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TagFacesIcon from "@mui/icons-material/TagFaces";
const Share_modal = () => {
  const { shareModalToggle } = useContext(ProfileContext);
  return (
    <div className="share_modal">
      <div className="container">
        <div className="heading_div">
          <span>Create Post</span>

          <CloseIcon className="button" onClick={shareModalToggle} />
        </div>

        <div className="main_section">
          <div className="user">
            <div className="userPic">
              <img
                src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="userInfo">
              <div className="user-name">Farabi Islam</div>
              <div className="user-mesg">
                <button></button>
              </div>
            </div>
          </div>
          <div className="write">
            <textarea
              name="write"
              id="post-w"
              cols="30"
              rows="3"
              placeholder="What's on your mind... "
            ></textarea>
          </div>
          <div className="items">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <AddPhotoAlternateOutlinedIcon fontSize="large" />
              </div>
            </label>
            <div className="item">
              <LocationOnOutlinedIcon fontSize="large" />
            </div>
            <div className="item">
              <PersonAddIcon fontSize="large" />
            </div>
            <div className="item">
              <TagFacesIcon fontSize="large" />
            </div>
          </div>

          <button className="btn-w">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Share_modal;
