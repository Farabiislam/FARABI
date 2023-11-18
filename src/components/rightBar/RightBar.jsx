import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";
import "./rightBar.scss";

const RightBar = () => {
    const { seeChatToggle } = useContext(ProfileContext);
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
    {
      id: 4,
      name: "Tanu",
      userPic:
        "https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      name: "Anik",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916255/pexels-photo-13916255.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 6,
      name: "Siam Ahamed",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      name: "Md Naim",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916250/pexels-photo-13916250.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 8,
      name: "Md Ismail",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916274/pexels-photo-13916274.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];


  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className="heading">suggestions for you</span>
          <div className="suggestions">
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881618/pexels-photo-4881618.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="img"
                />
                <span>Farhana Akhtar</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881679/pexels-photo-4881679.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="img"
                />
                <span>Tamim </span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881615/pexels-photo-4881615.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="img"
                />
                <span>Mehidy Hossain</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>

          {/*  latest activities */}
          <span className="heading">Latest Activities</span>
          <div className="latest-activities">
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Rashidul islam</span>
                  changed cover picture <br />
                  <small>1 min ago</small>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Rakibul isalm</span>
                  changed cover picture
                  <br />
                  <small>1 min ago</small>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881649/pexels-photo-4881649.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Farabi islam</span> changed cover picture <br />
                  <small>1 min ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <span className="heading">Online Friends</span>
          <div className="online-friends">
            {users.map((user) => (
              <div className="user" key={user.id} onClick={seeChatToggle}>
                <div className="userInfo">
                  <img
                    src={user.userPic}
                    alt=""
                  />
                  <div className="online" />
                  <span>{user.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="item">
          <span className="heading">Groups Conversations</span>
          <div className="online-friends">
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Batch(11)-Section-A</span>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Batch-Sweet-sixteen</span>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>আমরা-ফাজিল</span>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Developers(20)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
