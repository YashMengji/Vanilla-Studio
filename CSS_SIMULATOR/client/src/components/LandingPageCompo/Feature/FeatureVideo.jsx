import "./FeatureVideo.css";

export default function FeatureVideo({ videoSrc }) {
    return (
        <div className="feature-video-container">
            <video className="feature-video" autoPlay muted loop playsInline disablePictureInPicture>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}