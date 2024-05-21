import { useContext } from "react";
import { UserContext } from ".";
import { getLogout, postLogin } from "../../../api/user";

export const useUSer = () => {
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    getLogout().then((msg) => {
      if (msg.data === "logout") {
        setUser(undefined);
      }
    });
  };

  const loginUser = (user: userLogin) => {
    postLogin(user).then((data) => setUser(data));
  };

  return { user, loginUser, logoutUser };
};
