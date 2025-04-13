import { makeRequests } from "./makeRequests";

// get all projects for user dashboard 
export function getProjects(){
  return makeRequests("/projects");
}

export function createProject(formData) {
  return makeRequests('/projects', {
    method: 'POST',
    data: formData,
    Headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

export function deleteProject(id){
  return makeRequests(`/projects/${id}`, {
    method: 'DELETE'
  });
}

// post settings 
export function updateProject(id, formData) {
  return makeRequests(`/projects/${id}`, {
    method: 'PUT',
    data: formData,
    Headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

