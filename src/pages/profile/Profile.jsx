import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HouseIcon from "@mui/icons-material/House";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SendIcon from '@mui/icons-material/Send';

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts/Posts";
import "./profile.scss";


const OwnProfile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="background">
      <div className="ownProfile">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13447760/pexels-photo-13447760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
          />
          <img src={currentUser.profilePic} alt="" className="profilePic" />
        </div>
        <div className="profileContainer">
          <div className="userInfo">
            <div className="left">
              <div className="name-bio">
                <span>Farabi Islam</span>
                <small>1.2k followers . 20 following</small>
                <p>DONT JUDGE A BOOK BY IT'S COVER</p>
              </div>
            </div>

            <div className="right">
              <button className="btn-1">

                Following
              </button>
              <button className="btn-2">
                <SendIcon/>
              </button>
              <button className="btn-3">
                <MoreHorizOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-info">
        <div className="info-container">
          <div className="info-e">
            <div className="item">
              <WorkOutlineOutlinedIcon />
              <span>Web development</span>
            </div>
            <div className="item">
              <SchoolOutlinedIcon />
              <span>BSC in CSE</span>
            </div>
            <div className="item">
              <HouseIcon />
              <span>Dhaka,Bangladesh</span>
            </div>

            <div className="item">
              <EmailOutlinedIcon />
              <span>farabii099@gmail.com</span>
            </div>

            <div className="item">
              <PlaceIcon />
              <span>Bangladesh</span>
            </div>
            <div className="item">
              <LanguageIcon />
              <span>Farabi.dev</span>
            </div>
            <div className="social-link">
              <a href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <InstagramIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <TwitterIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <LinkedInIcon fontSize="medium" />
              </a>
            </div>
 
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

          <div className="photo">
            <span>Friends</span>
            <div className="photo_container">
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/4881615/pexels-photo-4881615.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
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

            <button className="edt">See All Friends</button>
          </div>
        </div>

        <div className="share-post">
          <div className="post-cls">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnProfile;
