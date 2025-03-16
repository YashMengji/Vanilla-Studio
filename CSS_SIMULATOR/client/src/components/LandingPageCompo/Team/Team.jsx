import "./Team.css";
import TeamCardTab from "./TeamCardTab";

export default function Team() {
    return (
        <div className="team">
            <div className="team-content">
                <h1 className="team-heading">Meet Our Team</h1>
            <p className="team-description">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
            </div>
            <TeamCardTab />
        </div>
    );
}