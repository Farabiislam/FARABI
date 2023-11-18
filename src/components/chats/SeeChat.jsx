import { useContext } from "react";
import "./seeChat.scss"
import CloseIcon from "@mui/icons-material/Close";
import { ProfileContext } from "../../context/profileContext";
const SeeChat = () => {
   const { seeChatToggle } = useContext(ProfileContext);
 return (
   <div className="see_chat">
     <div className="heading_div">
       <span>See messages</span>

       <CloseIcon className="button" onClick={seeChatToggle} />
     </div>
     <div className="dumy">Working on it Coming soon...</div>
   </div>
 );
}

export default SeeChat