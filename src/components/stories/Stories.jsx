import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./stories.scss";
import { Link } from "react-router-dom";

const Stories = () => {
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
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="stories">
      <div className="story">
        <img src={currentUser.profilePic} className="blur" alt="image" />
        <Link to="/own-story" className="button">
          +
        </Link>
        <div className="tag">
        <span>Create story</span>
        </div>
      </div>

      {stories.map((story) => (
        <div className="story" key={story.id}>
          <Link to="/see_story">
            <img src={story.img} alt="image" />
          </Link>

          <Link to="/profile/:id" className="user_name">
            <img src={story.userPic} alt="" />
            <span>{story.name}</span>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Stories;
