import "./chat_info.scss"
import PushPinIcon from "@mui/icons-material/PushPin";

const Chat_info = () => {
   return (
     <div className="chat_info">
       <div className="pin_txt">
         <PushPinIcon fontSize="large"/>
         <span>View pinned messages</span>
       </div>
     </div>
   );
}

export default Chat_info