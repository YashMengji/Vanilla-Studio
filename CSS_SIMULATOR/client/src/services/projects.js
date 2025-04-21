import { makeRequests } from "./makeRequests";

// get all projects for user dashboard 
export function getProjects(){
  return makeRequests("/projects");
}

export function createProject(formData) {
  return makeRequests('/projects/create', {
    method: 'POST',
    data: formData,
  });
}

export function deleteProject(id){
  return makeRequests(`/projects/${id}`, {
    method: 'DELETE'
  });
}

// post settings 
export function updateProject(id, formData) {
  return makeRequests(`/projects/${id}/update`, {
    method: 'PUT',
    data: formData,
    Headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

// apis for studio page 
export function getProject(id) {
  return makeRequests(`/projects/${id}`);
}

// service for autosave feature : 
export function saveChanges(id, htmlObj) {  
  return makeRequests(`/projects/${id}/edit`, {
    method: 'PUT',
    data: htmlObj,
  })
}
