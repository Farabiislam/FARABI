import "./options.scss"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import PersonAddDisabledIcon from "@mui/icons-material/PersonAddDisabled";
import BlockIcon from "@mui/icons-material/Block";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Options = () => {
const { currentUser } = useContext(AuthContext);
  return (
    <div className="Options">
      <div className="option-container">
        <div className="item">
          <Link className="link">
            <BookmarkBorderIcon className="icon" />
            <span>Save post</span>
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <DisabledByDefaultOutlinedIcon className="icon" />
            <span>Hide post</span>
          </Link>
        </div>

        <div className="item">
          <Link className="link">
            <PersonAddDisabledIcon className="icon" />
            <span>Unfollow {currentUser.name} </span>
          </Link>
        </div>
        <div className="item">
          <Link className="link">
            <BlockIcon className="icon" />
            <span>Block </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Options