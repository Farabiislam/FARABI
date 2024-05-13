import { useContext, useState } from "react";
import "./seeChat.scss";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibraryOutlined";
import SendIcon from "@mui/icons-material/Send";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import CloseIcon from "@mui/icons-material/Close";
import { ProfileContext } from "../../context/profileContext";
import Mesg_content from "../../pages/messages/message_funtionality/Mesg_content";
const SeeChat = () => {
  const { seeChatToggle } = useContext(ProfileContext);
  const [reaction, setREaction] = useState(false);
  return (
    <div className="see_chat">
      <div className="heading_div">
        <CloseIcon className="button"  onClick={seeChatToggle} />
      </div>
      <div className="_container">
        <div className="selected_messages_container ">
          <div className="heading_option">
            <div className="user">
              <div className="userPic">
                <img
                  src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
              </div>
              <div className="userInfo">
                <div className="user-name">Rashidul Islam</div>

                <div className="txt">active Now</div>
              </div>
            </div>

            <div className="more_option">
              <CallIcon className="user-options" fontSize="large" />
              <VideoCallIcon className="user-options" fontSize="large" />
              <InfoOutlinedIcon
                className="user-options "
                fontSize="large"
                onClick={() => setInfoHide(!InfoHide)}
              />
            </div>
          </div>

          {/*...... messages .....*/}
          <Mesg_content />

          <div className="send_option">
            <div className="left">
              <AddCircleIcon fontSize="large" />
              <input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <PhotoLibraryIcon
                  style={{ cursor: "pointer" }}
                  fontSize="large"
                />
              </label>
            </div>

            <div className="write-message">
              <input type="text" placeholder="Write... " />
              <AddReactionIcon
                className="add_react"
                onClick={() => setREaction(!reaction)}
              />
              <div className="emoji_piker">
                {reaction && <Picker theme="auto" data={data} />}
              </div>
            </div>
            <div className="right">
              <SendIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeChat;
