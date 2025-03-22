import "./HeroVideo.css";
import VideoContent from "./VideoContent";
import VideoPreview from "./VideoPreview";

export default function HeroVideo() {
    return (
      <div className="hero-video">
        <VideoContent />
        <VideoPreview />
      </div>
    );
}