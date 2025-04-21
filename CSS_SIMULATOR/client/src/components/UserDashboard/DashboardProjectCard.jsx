import { useEffect, useState } from "react";
import "./DashboardProjectCard.css";
import {updateProject, getProject, deleteProject} from "../../services/projects";
import { Link } from "react-router-dom";
import {useResizeContext} from '../DesignSection/ResizeContext';
import { useNavigate } from "react-router-dom";

export default function DashboardProjectCard({
  backgroundImage = "/images/No-Image-Found.jpg",
  projectTitle,
  projectDesc,
  visibility,
  projectId,
  userProjectsArr
}) {
  const navigate = useNavigate();
  const {editorHtml, setEditorHtml, editorCss, setEditorCss, isInitialized, setIsInitialized} = useResizeContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [cardData, setCardData] = useState({
      projectTitle,
      projectDesc,
      visibility
  })

  const [projectFormData, setProjectFormData] = useState(
    {
      projectTitle,
      projectDesc,
      visibility
    }
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await updateProject(projectId, projectFormData);
      console.log(response);
      setCardData({...projectFormData});
    } catch (err) {
      console.log("error updating project info : ", err);
    }
    closeModal();
  };

  async function handleOpenProject() {
    try {
      let response = await getProject(projectId);
      console.log(response);
      if(response.HTML != "") {
        setIsInitialized(true);
        setEditorHtml(response.HTML);
        setEditorCss(response.CSS);
      }
      navigate(`/studio/${projectId}`, {replace: true});
    } catch(err) {
      console.log("Error getting project : ", err);
    }
  }

  async function handleProjectDelete() {
    try {
      let response = await deleteProject(projectId);
      if(response.status) {
        console.log(response.project);
        userProjectsArr((prevProj) => prevProj.filter(project => project._id != projectId));
      }
    } catch(err) {
      console.log("error deleting project : ", err);
    }
  }

  return (
    <>
      <div className="project-card">
        <div className="project-image" onMouseOver={() => setIsBtnActive(true)} onMouseOut={() => setIsBtnActive(false)}>
          <img src={backgroundImage} alt="Project" />
          <div className={`open-project-btn ${isBtnActive ? "open-project-btn-active" : ""} `} onClick={handleOpenProject}>
            Open
          </div>
        </div>
        <span className="project-card-title">{cardData.projectTitle}</span>
        <div className="project-card-btn">
          <button className="card-edit" onClick={openModal}>
            Edit |&nbsp; <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button></button>
          <button className="card-delete" onClick={handleProjectDelete}>
            Delete |&nbsp;<i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Project</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Project Name:
                <input
                  type="text"
                  name="projectTitle"
                  value={projectFormData.projectTitle}
                  onChange={handleProjectChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="projectDesc"
                  value={projectFormData.projectDesc}
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
                    />
                    Public
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      checked={projectFormData.visibility === "private"}
                      onChange={handleProjectChange}
                    />
                    Private
                  </label>
                </div>
              </label>
              <button className="btnSubmit" type="submit">
                Save
              </button>
              <button className="btnClose" type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
