import "./VideoPreview.css";
import previewVideo from "../../../assets/video.mp4";

export default function VideoPreview() {
    return (
        <div className="video-container">
            <video className="video" autoPlay muted loop playsInline disablePictureInPicture>
                <source src={previewVideo} type="video/mp4" />
            </video>
        </div>
    );
}