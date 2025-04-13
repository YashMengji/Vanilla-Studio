import "./Dashboard.css";
import { useState } from "react";
import ProjectPreviewCard from "./DashboardProjectCard";

export default function Dashboard({ name, username, email, projects }) {
  const names = ["All", "Private", "Public"];
  const [index, setIndex] = useState(0);

  // Modals
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);

  // Forms
  const [projectFormData, setProjectFormData] = useState({
    name: "",
    description: "",
    visibility: "public",
    backgroundImage: "",
  });

  const [accountFormData, setAccountFormData] = useState({
    name,
    username,
    email,
  });

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  // Modal Toggles
  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const openEditAccountModal = () => setIsEditAccountModalOpen(true);
  const closeEditAccountModal = () => setIsEditAccountModalOpen(false);

  // Form Handlers
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountFormData({ ...accountFormData, [name]: value });
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    console.log("Project submitted:", projectFormData);
    closeProjectModal();
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    console.log("Account details updated:", accountFormData);
    closeEditAccountModal();
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
          <div className="dash-profile">
            <h1 className="head-detail-title">My Account</h1>
            <div className="head-detail-item">
              <h2>Name:</h2>
              <p>{accountFormData.name}</p>
            </div>
            <div className="head-detail-item">
              <h2>Username:</h2>
              <p>{accountFormData.username}</p>
            </div>
            <div className="head-detail-item">
              <h2>Email:</h2>
              <p>{accountFormData.email}</p>
            </div>
            <button className="dash-header-btn" onClick={openEditAccountModal}>
              Update Account Details
            </button>
          </div>

          <div className="dash-project">
            <h1 className="head-detail-title">My Projects</h1>
            <div className="head-detail-item">
              <h2>Projects:</h2>
              <p>{projects}</p>
            </div>
            <button className="dash-header-btn" onClick={openProjectModal}>
              Add New Project
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-project">
        <div className="dash-project-header">
          <div className="dash-title">
            <h2>My Projects</h2>
          </div>
          <div className="tab-container">
            <input
              type="radio"
              name="tab"
              id="tab1"
              className="tab tab--1"
              checked={index === 0}
              onChange={() => setIndex(0)}
            />
            <label className="tab_label" htmlFor="tab1">
              All
            </label>

            <input
              type="radio"
              name="tab"
              id="tab2"
              className="tab tab--2"
              checked={index === 1}
              onChange={() => setIndex(1)}
            />
            <label className="tab_label" htmlFor="tab2">
              Private
            </label>

            <input
              type="radio"
              name="tab"
              id="tab3"
              className="tab tab--3"
              checked={index === 2}
              onChange={() => setIndex(2)}
            />
            <label className="tab_label" htmlFor="tab3">
              Public
            </label>

            <div className="indicator"></div>
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

      {/* Project Modal */}
      {isProjectModalOpen && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Project</h2>
            <form onSubmit={handleProjectSubmit}>
              <label>
                Project Name:
                <input
                  type="text"
                  name="name"
                  value={projectFormData.name}
                  onChange={handleProjectChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={projectFormData.description}
                  onChange={handleProjectChange}
                  required
                />
              </label>
              <label>
                Visibility:
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <label>
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      checked={projectFormData.visibility === "public"}
                      onChange={handleProjectChange}
                    />{" "}
                    Public
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      checked={projectFormData.visibility === "private"}
                      onChange={handleProjectChange}
                    />{" "}
                    Private
                  </label>
                </div>
              </label>
              <label>
                Background Image URL:
                <input
                  type="text"
                  name="backgroundImage"
                  value={projectFormData.backgroundImage}
                  onChange={handleProjectChange}
                  required
                />
              </label>
              <button className="btnSubmit" type="submit">
                Create
              </button>
              <button
                className="btnClose"
                type="button"
                onClick={closeProjectModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Account Modal */}
      {isEditAccountModalOpen && (
        <div className="modal-overlay" onClick={closeEditAccountModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Account Details</h2>
            <form onSubmit={handleAccountSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={accountFormData.name}
                  onChange={handleAccountChange}
                  required
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={accountFormData.username}
                  onChange={handleAccountChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={accountFormData.email}
                  onChange={handleAccountChange}
                  required
                />
              </label>
              <button className="btnSubmit" type="submit">
                Save Changes
              </button>
              <button
                className="btnClose"
                type="button"
                onClick={closeEditAccountModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
