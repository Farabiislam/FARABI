import { useContext } from "react";
import "./story.scss";
import CloseIcon from "@mui/icons-material/Close";
import { ProfileContext } from "../../context/profileContext";
import { Link } from "react-router-dom";

const Story = () => {
   const { storyToggle } = useContext(ProfileContext);
  return (
    <div className="story-write">
      <div className="container">
        <div className="heading_div">
          <span>Create Story</span>
          <Link to="/" className="cls-btn">
          <CloseIcon className="button" onClick={storyToggle} />
          </Link>
        </div>

        <div className="main_section">

        </div>
      </div>
    </div>
  );
};

export default Story;
