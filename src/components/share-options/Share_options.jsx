import "./share_options.scss"
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import { Link } from "react-router-dom";
const Share_options = () => {
  return (
    <div className="share_Options">
      <div className="share_option_container">
        <div className="s_item">
          <Link className="link">
            <ReplyOutlinedIcon className="icon" />
            <span>Share now</span>
          </Link>
        </div>
        <div className="s_item">
          <Link className="link">
            <ForwardToInboxOutlinedIcon className="icon" />
            <span>Send in message</span>
          </Link>
        </div>

        <div className="s_item">
          <Link className="link">
            <LinkOutlinedIcon className="icon" />
            <span>Copy link</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Share_options