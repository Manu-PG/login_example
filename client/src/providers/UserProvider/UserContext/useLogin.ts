import { useContext, useState } from "react";
import { UserContext } from ".";
import { postLogin } from "../../../api/user";
import { AxiosError } from "axios";

export const useLogin = () => {
  const { user, setUser } = useContext(UserContext);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");

  const loginUser = (user: userLogin) => {
    setRequestStatus("loading");
    return postLogin(user)
      .then((data) => {
        setRequestStatus("done");
        setUser(data);
        return data;
      })
      .catch((error) => {
        setRequestStatus("error");
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.error;
          throw new Error(errorMessage ? errorMessage : "Something went wrong");
        }
        throw new Error("Something went wrong");
      });
  };

  return { user, requestStatus, loginUser };
};
