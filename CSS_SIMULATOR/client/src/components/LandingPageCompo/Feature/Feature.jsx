import "./Feature.css";
import FeatureContent from "./FeatureContent.jsx";
import Feature1 from "../../../assets/Feature1.mp4";
import Feature2 from "../../../assets/Feature2.mp4";

const features = [
    { id: 1, title: "HTML Components", desc: "Prebuilt components ready to use at your fingertips", videoSrc: Feature1 },
    { id: 2, title: "CSS Styling", desc: "Styling with easy visulal sliders and button for ease of use", videoSrc: Feature2 },
    { id: 3, title: "Code Editor", desc: "Provide Html, Css, Js for hands on control to your work for future prposes", videoSrc: Feature1 },
];

export default function Feature() {
    return (
        <div className="feature">
            <FeatureContent features={features} />
        </div>
    );
}