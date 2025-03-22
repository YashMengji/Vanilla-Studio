import "./FeatureSpec.css"

export default function FeatureSpec ({ title, desc }) {
    return (
        <div className="feature-spec">
            <div className="spec-text">
                <div className="spec-title">{title}</div>
                <div className="spec-description">{desc}</div>
            </div>
        </div>
    )
}