import "./media_files.scss"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibraryOutlined";
import AttachmentIcon from "@mui/icons-material/Attachment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


const Media_files = () => {
  return (

    <div className="media_files">
    
      <div className="media-files-links ">
        <PhotoLibraryIcon fontSize="large" />
        <span>Media</span>
      </div>
      <div className="media-files-links">
        <InsertDriveFileIcon fontSize="large" />
        <span>Files</span>
      </div>
      <div className="media-files-links">
        <AttachmentIcon fontSize="large" />
        <span>Links</span>
      </div>
    </div>
  );
}

export default Media_files