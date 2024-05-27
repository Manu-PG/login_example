import api from "./apiConection";

export const postLogin = ({ username, password }: userLogin) => {
  return api.post<userLogin>("/user/login", {}, { auth: { username, password } }).then(({ data }) => data);
};

export const getLogout = () => {
  return api.get<string>(`/user/logout`);
};

export const postCreateUser = ({ username, password }: userLogin) => {
  return api.post<userLogin>("/user/register", {}, { auth: { username, password } }).then(({ data }) => data);
};

export const getUser = () => {
  return api.get<userLogin>(`/user/me`).then(({ data }) => data);
};
