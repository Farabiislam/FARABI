import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Like from "../../assets/reactions/like.gif";
import Love from "../../assets/reactions/love.gif";
import HaHa from "../../assets/reactions/haha.gif";
import Sad from "../../assets/reactions/sad.gif";
import Wow from "../../assets/reactions/wow.gif";
import Angry from "../../assets/reactions/angry.gif";

import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import Options from "../post-options/Options";
import { useState } from "react";
import Share_options from "../share-options/Share_options";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [postOption, setPostOption] = useState(false);
  const [shareOption, setShareOption] = useState(false);
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={`/profile/${post.userId}`}>
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">2min ago</span>
            </div>
          </div>

          <MoreHorizIcon
            className="more-btn"
            onClick={() => setPostOption(!postOption)}
          />

          {postOption && <Options />}
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item-reactions">
            <div className="reactions">
              <div className="emoji">
                <div className="emoji-item">
                  <p>Like</p>
                  <img src={Like} alt="" />
                </div>
                <div className="emoji-item">
                  <p>Love</p>
                  <img src={Love} alt="" />
                </div>
                <div className="emoji-item">
                  <p>Wow</p>
                  <img src={Wow} alt="" />
                </div>
                <div className="emoji-item">
                  <p>Sad</p>
                  <img src={Sad} alt="" />
                </div>
                <div className="emoji-item">
                  <p>Haha</p>
                  <img src={HaHa} alt="" />
                </div>
                <div className="emoji-item">
                  <p>Angry</p>
                  <img src={Angry} alt="" />
                </div>
              </div>
            </div>
            {<FavoriteBorderOutlinedIcon />}
            <span>Likes</span>
          </div>

          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            20 Comments
          </div>

          <div className="item" onClick={() => setShareOption(!shareOption)}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
      </div>
      {shareOption && <Share_options />}
      {commentOpen && (
        <div className="cmt">
          <Comments />
        </div>
      )}
    </div>
  );
};

export default Post;
