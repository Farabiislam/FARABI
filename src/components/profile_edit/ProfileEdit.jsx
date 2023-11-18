import "./profileEdit.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";
const ProfileEdit = () => {
  const { editModalToggle } = useContext(ProfileContext);
  return (
    <div className="edit_modal" onClick={editModalToggle}>
      <div className="edit_container">
        <div className="heading_div">
          <span>Edit Profile</span>
          < CloseIcon className="button" onClick={editModalToggle} />
        </div>

        <div className="main_section">Working on it coming soon..</div>
      </div>
    </div>
  );
};

export default ProfileEdit;
