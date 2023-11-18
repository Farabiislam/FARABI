import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import "./friends.scss";

const Friends = () => {
  const users = [
    {
      id: 1,
      name: "Rahsidul islam",
      userPic:
        "https://images.pexels.com/photos/4881612/pexels-photo-4881612.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Rafikul islam",
      userPic:
        "https://images.pexels.com/photos/4881614/pexels-photo-4881614.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Rakibul islam",
      userPic:
        "https://images.pexels.com/photos/4881615/pexels-photo-4881615.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 9,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 10,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 11,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 12,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 13,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 14,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="friends">
      <div className="friends-container">
        <div className="left-side">
          <div className="heading-f">Friends</div>
          <div className="friends_menu">
            <div className=" item-active">
              <PeopleIcon fontSize="large" />
              <span>Home</span>
            </div>
            <Link to="" className="item">
              <PersonAddAltIcon fontSize="large" />
              <span>Friend Request</span>
            </Link>
            <Link to="" className="item">
              <Diversity3Icon fontSize="large" />
              <span>All Friends</span>
            </Link>
            <Link to="" className="item">
              <PersonAddIcon fontSize="large" />
              <span>Suggestions</span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="r-heading">Friend Request</div>
          <div className="right_container">
            <div className="request">
              {users.map((user) => (
                <div className="card">
                  <Link className="card_link">
                    <img src={user.userPic} alt="" />
                    <span>{user.name}</span>
                  </Link>
                  <button className="btn-c">Confirm</button>
                  <button className="btn-d">Delete</button>
                </div>
              ))}
            </div>
            <div className="suggest">
              <div className="suggest-heading">People you may Know</div>
              <div className="suggest-container">
                {users.map((user) => (
                  <div className="card">
                    <Link className="card_link">
                      <img src={user.userPic} alt="" />
                      <span>{user.name}</span>
                    </Link>
                    <button className="btn-c">Add Friend</button>
                    <button className="btn-d">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
