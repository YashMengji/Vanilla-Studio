import { makeRequests } from "./makeRequests"

export function createUser({fname, lname, username, password, email}){
  return makeRequests(`/auth/register`, {
    method: "POST",
    data: {fname, lname, username, password, email},
  })
}

export function login({username, password}){
  return makeRequests(`/auth/login`, {
    method: "POST",
    data: {username, password},
  })
}

export function updateUser(formData) {
  return makeRequests("/auth/update", {
    method: "POST",
    data: formData,
  })
}

export function onLogout(){
  return makeRequests(`/auth/logout`, {
    method: "POST",
  })
}

