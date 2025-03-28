import "./Dashboard.css";
import { useState } from "react";
import ProjectPreviewCard from "./DashboardProjectCard";

export default function Dashboard({ name, username, email, projects }) {
  const names = ["All", "Private", "Public"];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dash-head-profile">
          <div className="dash-head-avatar">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <div className="dash-head-doodle">
              <h2>Hello</h2>
            </div>
          </div>
        </div>
        <div className="dash-head-details">
          <h1 className="head-detail-title">My Account</h1>
          <div className="head-detail-item">
            <h2>Name:</h2>
            <p>{name}</p>
          </div>
          <div className="head-detail-item">
            <h2>Username:</h2>
            <p>{username}</p>
          </div>
          <div className="head-detail-item">
            <h2>Email:</h2>
            <p>{email}</p>
          </div>
          <div className="head-detail-item">
            <h2>Projects:</h2>
            <p>{projects}</p>
          </div>
        </div>
      </div>
      <div className="dashboard-project">
        <div className="dash-project-header">
          <div className="dash-title">
            <h2>My Projects</h2>
          </div>
          <div className="dash-toggle-btn">
            <button onClick={handleClick}>{names[index]}</button>
          </div>
        </div>
        <div className="project-listings">
            <ProjectPreviewCard />
            <ProjectPreviewCard />
            <ProjectPreviewCard />
            <ProjectPreviewCard />
            <ProjectPreviewCard />
            <ProjectPreviewCard />
        </div>
      </div>
    </div>
  );
}
