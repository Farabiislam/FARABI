import "../messages.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Mesg_userList = () => {
  return (
    <div className="message-list">
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
          <div className="user-mesg">
            <div className="txt"> Hlw! How are you today😐!?</div>
            <div className="time"> .1h</div>
          </div>
        </div>
        <MoreHorizIcon className="user-options" />
      </div>

      <div className="user">
        <div className="userPic">
          <img
            src="https://images.pexels.com/photos/4881612/pexels-photo-4881612.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="online" />
        </div>
        <div className="userInfo">
          <div className="user-name">Rakibul Islam</div>
          <div className="user-mesg">
            <div className="txt"> Hlw! How are you today!?</div>
            <div className="time"> .1h</div>
          </div>
        </div>
        <MoreHorizIcon className="user-options" />
      </div>
    </div>
  );
}

export default Mesg_userList