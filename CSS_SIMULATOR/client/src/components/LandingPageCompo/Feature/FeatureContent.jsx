import { useState } from "react";
import "./FeatureContent.css";
import FeatureSpec from "./FeatureSpec.jsx";
import FeatureVideo from "./FeatureVideo.jsx";

export default function FeatureContent({ features = [] }) {
    const [selectedFeature, setSelectedFeature] = useState(features.length ? features[0].id : null);

    return (
        <div className="feature-content">
            <div className="feature-specs">
                {features.map((feature) => (
                    <div 
                        key={feature.id} 
                        onClick={() => setSelectedFeature(feature.id)}
                        className={`feature-spec-item ${selectedFeature === feature.id ? "active" : ""}`}
                    >
                        <FeatureSpec 
                            title={feature.title} 
                            desc={feature.desc} 
                        />
                    </div>
                ))}
            </div>
            <div className="feature-video">
                {features.map((feature) =>
                    selectedFeature === feature.id ? (
                        <FeatureVideo key={`video-${feature.id}`} videoSrc={feature.videoSrc} />
                    ) : null
                )}
            </div>
        </div>
    );
}