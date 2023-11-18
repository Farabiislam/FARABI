import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
/* import PinterestIcon from "@mui/icons-material/Pinterest"; */
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HouseIcon from "@mui/icons-material/House";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
/* import SendOutlinedIcon from "@mui/icons-material/SendOutlined"; */
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts/Posts";
import "./OwnProfile.scss";
import Share from "../../components/share-post/Share";
import { ProfileContext } from "../../context/profileContext";

const OwnProfile = () => {
  const { currentUser } = useContext(AuthContext);
   const { editModalToggle } = useContext(ProfileContext);

  return (
    <div className="background">
      <div className="ownProfile">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13447760/pexels-photo-13447760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
          />
          <div className="cover-cam-div">
            <PhotoCameraIcon className="cover-cam" />
            Edit cover photo
          </div>
          <img src={currentUser.profilePic} alt="" className="profilePic" />
        </div>
        <div className="profileContainer">
          <div className="userInfo">
            <div className="cam">
              <PhotoCameraIcon />
            </div>
            <div className="left">
              <div className="name-bio">
                <span>Farabi Islam</span>
                <small>1.2k followers . 20 following</small>
                <p>DONT JUDGE A BOOK BY IT'S COVER</p>
              </div>
            </div>

            <div className="right">
              <button className="btn-1" onClick={editModalToggle}>
                <EditIcon fontSize="medium" />
                Edit
              </button>
              <button className="btn-2">
                <AddIcon fontSize="large" />
                Add to story
              </button>
              <button className="btn-3">
                <MoreHorizOutlinedIcon fontSize="large"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-info">
        <div className="info-container">
          <div className="info-e">
            <div className="item">
              <WorkOutlineOutlinedIcon fontSize="large" />
              <span>Web development</span>
            </div>
            <div className="item">
              <SchoolOutlinedIcon fontSize="large" />
              <span>BSC in CSE</span>
            </div>
            <div className="item">
              <HouseIcon fontSize="large" />
              <span>Dhaka,Bangladesh</span>
            </div>

            <div className="item">
              <EmailOutlinedIcon fontSize="large" />
              <span>farabii099@gmail.com</span>
            </div>

            <div className="item">
              <PlaceIcon fontSize="large" />
              <span>Bangladesh</span>
            </div>
            <div className="item">
              <LanguageIcon fontSize="large" />
              <span>Farabi.dev</span>
            </div>
            <div className="social-link">
              <a href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="http://facebook.com">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
            <button className="edt" onClick={editModalToggle}>
              Edit Information
            </button>
          </div>

          <div className="photo">
            <span>Photos</span>
            <div className="photo_container">
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881618/pexels-photo-4881618.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="img"
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881649/pexels-photo-4881649.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881614/pexels-photo-2881614.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881613/pexels-photo-2881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/5781615/pexels-photo-5781615.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881613/pexels-photo-2881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>

              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881610/pexels-photo-4881610.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </div>

            <button className="edt">See All Photos</button>
          </div>

          <div className="all-friends">
            <span>Friends</span>
            <div className="friends_container">
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881615/pexels-photo-4881615.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="img"
                />
                <span>Sun</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Tanu</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>moon</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881649/pexels-photo-4881649.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Mehidy</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881614/pexels-photo-2881614.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Shadin</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881613/pexels-photo-2881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Tamim</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/5781615/pexels-photo-5781615.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Sulayman</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/2881613/pexels-photo-2881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Pappu</span>
              </div>

              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Sohag</span>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </div>

            <button className="edt">See All Friends</button>
          </div>
        </div>

        <div className="share-post">
          <div className="own_share">
            <Share />
          </div>
          <div className="post-cls">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnProfile;
