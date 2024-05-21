import api from "./apiConection";

export const postLogin = (user: userLogin) => {
  return api
    .post<userLogin>(
      "/user/login",
      {},
      {
        auth: {
          username: user.userName,
          password: user.password,
        },
      }
    )
    .then(({ data }) => data);
};

export const getLogout = () => {
  return api.get<string>(`${URL}/user/logout`);
};

export const postCreateUser = (user: userLogin) => {
  return api.post<string>(`${URL}/user/register`, user);
};

export const getUser = () => {
  return api.get<string>(`${URL}/user/me`);
};

/*export const deleteUser = (user: userLogin) => {
  return api.delete<string>(`${URL}/remove`, user);
}*/
