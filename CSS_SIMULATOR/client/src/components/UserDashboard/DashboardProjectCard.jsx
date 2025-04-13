import { useState } from "react";
import "./DashboardProjectCard.css";

export default function DashboardProjectCard({
  backgroundImage = "/images/No-Image-Found.jpg",
  title = "Untitled Project",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ backgroundImage, title });
  const [cardData, setCardData] = useState({ backgroundImage, title });

  const openModal = () => {
    setFormData({ ...cardData }); // Load current card data into form
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData({ ...formData }); // Update card data with new values
    closeModal();
  };

  return (
    <>
      <div
        className="project-card"
        style={{ backgroundImage: `url(${cardData.backgroundImage})` }}
      >
        <div className="project-card-border">
          <span className="project-card-title">{cardData.title}</span>
        </div>
        <div className="project-card-icons">
          <i className="fa-solid fa-pen-to-square" onClick={openModal}></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Project</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Background Image URL:
                <input
                  type="text"
                  name="backgroundImage"
                  value={formData.backgroundImage}
                  onChange={handleChange}
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </label>
              <button className="btnSubmit" type="submit">Save</button>
              <button className="btnClose"type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
