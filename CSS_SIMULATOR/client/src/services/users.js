import { makeRequests } from "./makeRequests"

export function getUser(){
  return makeRequests(`/u/users`, {
    method: "GET",
  })
}

export function createUser({fname, lname, username, password, email}){
  return makeRequests(`/auth/register`, {
    method: "POST",
    data: {fname, lname, username, password, email},
  })
}

export function login({loginUsername: username, loginPassword: password}){
  return makeRequests(`/auth/login`, {
    method: "POST",
    data: {username, password},
  });
}

export function updateUser(formData) {
  return makeRequests("/u/update", {
    method: "PUT",
    data: formData,
  })
}

export function onLogout(){
  return makeRequests(`/auth/logout`, {
    method: "POST",
  })
}

