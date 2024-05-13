import "./see_story.scss";
import Slider from "react-slick";
import "../../components/stories/slick.css";
import "../../components/stories/slick-theme.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const See_story = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
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
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881611/pexels-photo-4881611.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916255/pexels-photo-13916255.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 6,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916250/pexels-photo-13916250.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 8,
      name: "John Doe",
      userPic:
        "https://images.pexels.com/photos/4881616/pexels-photo-4881616.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/13916274/pexels-photo-13916274.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="_stories">
      <div className="stories-container">
        <div className="g-left-side">
          <div className="l-heading">Stories</div>
       
            <div className="online-story">
              {stories.map((story) => (
                <div className="user" key={story.id}>
                  <div className="userInfo">
                    <img src={story.userPic} alt="" />
                    <div className="online" />
                    <span>{story.name}</span>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
        <div className="g-right-side">
          <div className="_stories_slide">
            <Slider {...settings} className="slides">
              {stories.map((story) => (
                <div className="_story" key={story.id}>
                  <div>
                    <img src={story.img} alt="image" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default See_story;
