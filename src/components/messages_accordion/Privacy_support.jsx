import "./privacy_support.scss"
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import BlockIcon from "@mui/icons-material/Block";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";


const Privacy_support = () => {
  return (
    <div className="privacy_support">
      <div className="mute_block_report">
        <NotificationsIcon fontSize="large" />
        <span>Mute notifications</span>
      </div>
      <div className="mute_block_report">
        <BlockIcon fontSize="large" />
        <span>block</span>
      </div>
      <div className="mute_block_report">
        <ReportProblemOutlinedIcon fontSize="large" />
        <span>Report</span>
      </div>
    </div>
  );
}

export default Privacy_support