import axios from "axios";

const URL = "http://localhost:3000";

export const postLogin = (user: userLogin) => {
  return axios.post<string>(`${URL}/login`, user);
};

export const getLogout = () => {
  return axios.get<string>(`${URL}/logout`);
};

export const postCreateUser = (user: userLogin) => {
  return axios.post<string>(`${URL}/register`, user);
};

export const getUser = () => {
  return axios.get<string>(`${URL}/me`);
};

/*export const deleteUser = (user: userLogin) => {
  return axios.delete<string>(`${URL}/remove`, user);
}*/
