import "./messages.scss";
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

import { useState } from "react";
import Media_files from "../../components/messages_accordion/media_files";
import Privacy_support from "../../components/messages_accordion/Privacy_support";
import Chat_info from "../../components/messages_accordion/Chat_info";
import Mesg_userList from "./message_funtionality/Mesg_userList";
import Mesg_content from "./message_funtionality/Mesg_content";

const Messages = () => {
  const [reaction, setREaction] = useState(false);
  const [media, setMedia] = useState(false);
  const [Privacy, setPrivacy] = useState(false);
  const [chatInfo, setChatInfo] = useState(false);
  const [InfoHide, setInfoHide] = useState(true);

  return (
    <div className="messages">
      <div className="messages-container">
        <div className="message-left-side">
          <div className="m-heading">
            <span>Messages</span>
            <MoreHorizIcon className="more" />
          </div>
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search... " />
          </div>
          {/*.... user list ....*/}

          <Mesg_userList />
        </div>

        {/*...right side...*/}

        <div className="message-right-side">
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
              <Mesg_content/>

            <div className="send_options">
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

          {InfoHide && (
            <div className="selected_message_info ">
              <div className="user">
                <div className="userPic">
                  <img
                    src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="userInfo">
                  <div className="user-name">Rashidul Islam</div>

                  <div className="txt">active Now</div>
                </div>
              </div>

              <div className="info_options">
                <div className="_icon">
                  <AccountCircleOutlinedIcon fontSize="large" />
                </div>
                <div className="_icon ">
                  <NotificationsNoneOutlinedIcon fontSize="large" />
                </div>
                <div className="_icon">
                  <SearchOutlinedIcon fontSize="large" />
                </div>
              </div>

              <div className="info_settings">
                <div
                  className="s_1 setting"
                  onClick={() => setChatInfo(!chatInfo)}
                >
                  <span>Chat info</span>
                  {chatInfo ? (
                    <KeyboardArrowUpIcon fontSize="large"/>
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large"/>
                  )}
                </div>
                <div> {chatInfo && <Chat_info />}</div>
                <div className="s_2 setting" onClick={() => setMedia(!media)}>
                  <span>Media, files and links</span>
                  {media ? <KeyboardArrowUpIcon fontSize="large"/> : <KeyboardArrowDownIcon fontSize="large"/>}
                </div>
                <div> {media && <Media_files />}</div>
                <div
                  className="s_3 setting"
                  onClick={() => setPrivacy(!Privacy)}
                >
                  <span>Privacy & support</span>
                  {Privacy ? (
                    <KeyboardArrowUpIcon fontSize="large"/>
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large"/>
                  )}
                </div>
                <div> {Privacy && <Privacy_support />}</div>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Messages;
