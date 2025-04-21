import "./Dashboard.css";
import { useEffect, useState } from "react";
import DashboardProjectCard from "./DashboardProjectCard";
import { useUser } from "../../contexts/UserContext";
import {updateUser} from "../../services/users";
import { createProject, getProjects } from "../../services/projects";

export default function Dashboard({ name, username, email, projects }) {
  const { logUser, setLogUser , setUsers} = useUser();
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    console.log(logUser);
    setAccountFormData((...prevForm) => ({...prevForm, fname: logUser?.fname || "", lname: logUser?.lname || ""}));
  }, [logUser]);

  // get user projects during the component's first render 
  useEffect(() => {
    async function getUserProjects() {
      try {
        const response = await getProjects();
        console.log("Fetched Projects:", response);
        setUserProjects(response);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    getUserProjects();
  }, [])

  const names = ["All", "Private", "Public"];
  const [index, setIndex] = useState(0);

  // Modals
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);

  // Forms
  const [projectFormData, setProjectFormData] = useState({
    projectTitle: "",
    projectDesc: "",
    visibility: "public",
  });

  const [accountFormData, setAccountFormData] = useState({
    fname: "",
    lname: "",
  });

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  // Modal Toggles
  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const openEditAccountModal = () => setIsEditAccountModalOpen(true);
  const closeEditAccountModal = () => setIsEditAccountModalOpen(false);

  // form input, state handlers 
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountFormData({ ...accountFormData, [name]: value });
  };

  // Form Handlers
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try{
      let response = await createProject(projectFormData);
      console.log("new project : ",response);
      if(response.status) {
        setUserProjects((prev) => ([...prev, response.project]));
      }
    }catch(err) {
      console.log("Error in creating new project:", err);
    }
    closeProjectModal();
  };

  const handleAccountSubmit = async (e) => {
    e.preventDefault();
    try{
      let response = await updateUser(accountFormData);
      console.log(response);
      if(response.status) {
        setLogUser(prev => ({ ...prev, fname: accountFormData.fname, lname: accountFormData.lname }));

        setUsers(prevUsers =>
          prevUsers.map(user =>
            user._id === logUser._id ? { ...user, fname: accountFormData.fname, lname: accountFormData.lname } : user
          )
        );
      }
    } catch(err) {
      console.log("Error updating user info:", err);
    } 
    // console.log("Account details updated:", accountFormData);
    closeEditAccountModal();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-userData">
        <div className="userData1">
          <div className="dash-head-avatar">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
          </div>
          <h1 className="head-detail-title">My Account Detail:</h1>
          <div className="userData2">
            <div className="head-detail-item">
              <h2 className="head-detail-item-name">Name:</h2>
              <p className="head-detail-item-name-value">
                {logUser?.fname} {logUser?.lname}
              </p>
            </div>
            <div className="head-detail-item">
              <h2 className="head-detail-item-username">Username:</h2>
              <p className="head-detail-item-name-value">{logUser?.username}</p>
            </div>
            <div className="head-detail-item">
              <h2 className="head-detail-item-email">Email:</h2>
              <p className="head-detail-item-name-value">{logUser?.email}</p>
            </div>
          </div>
        </div>

        <button className="userProfile-btn" onClick={openEditAccountModal}>
          Update Account Details
        </button>
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
          <button className="newProject-btn" onClick={openProjectModal}>
            Add New Project
          </button>
        </div>
        <div className="project-listings">
          {userProjects.map((project) => (
            <DashboardProjectCard projectTitle={project.projectTitle} projectDesc={project.projectDesc} visibility={project.visibility} key={project._id} projectId={project._id}/>
          ))} 
          {/* <ProjectPreviewCard /> */}
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
                  name="projectTitle"
                  value={projectFormData.name}
                  onChange={handleProjectChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="projectDesc"
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
                Firstname:
                <input
                  type="text"
                  name="fname"
                  value={accountFormData.fname}
                  onChange={handleAccountChange}
                  required
                />
              </label>
              <label>
                Lastname:
                <input
                  type="text"
                  name="lname"
                  value={accountFormData.lname}
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
