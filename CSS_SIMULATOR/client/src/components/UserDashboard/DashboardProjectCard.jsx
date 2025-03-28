import "./DashboardProjectCard.css";

export default function DashboardProjectCard({ 
  backgroundImage = "/images/No-Image-Found.jpg", 
  title = "Untitled Project" 
}) {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="project-card-border">
        <span className="project-card-title">{title}</span>
      </div>
      <div className="project-card-icons">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
}
