import "./chats.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ProfileContext } from "../../context/profileContext";
import { useContext } from "react";
const Chats = () => {
  const { seeChatToggle} = useContext(ProfileContext);

  const users = [
    {
      id: 1,
      name: "Rahsidul islam",
      userPic:
        "https://images.pexels.com/photos/4881612/pexels-photo-4881612.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916271/pexels-photo-13916271.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Rafikul islam",
      userPic:
        "https://images.pexels.com/photos/4881614/pexels-photo-4881614.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/3228772/pexels-photo-3228772.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Rakibul islam",
      userPic:
        "https://images.pexels.com/photos/4881615/pexels-photo-4881615.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916253/pexels-photo-13916253.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
 
  ];


  return (
    <div className="chats">
      <div className="heading">Messages</div>
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search... " />
      </div>

      <div className="chat-list">
        {users.map((user) => (
          <div className="user" key={user.id} onClick={seeChatToggle}>
            <div className="userPic">
              <img src={user.userPic} alt="" />
              <div className="online" />
            </div>
            <div className="userInfo">
              <div className="user-name">{user.name}</div>
              <div className="user-mesg">
                Hlw! How are you today😐?
                <small> .1h</small>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
