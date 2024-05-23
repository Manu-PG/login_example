import { ErrorMessage, RegisterContainer, RegisterForm } from "./RegisterPage.styled";
import { useEffect, useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useUser } from "../../providers/UserProvider/UserContext/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/svg/spinner";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isPassError, setIsPassError] = useState<boolean>(false);
  const { user, requestStatus, registerUser } = useUser();
  const navigate = useNavigate();

  const registerSubmit = () => {
    const isPasswordWrong = password != passwordConfirm;
    if (isPasswordWrong) setIsPassError(true);
    else {
      setIsPassError(false);
      const user = {
        username: email,
        password: password,
      } as userLogin;
      registerUser(user);
    }
  };

  useEffect(() => {
    if (user !== undefined) navigate("/");
  }, [user]);

  return (
    <RegisterContainer>
      <RegisterForm>
        <Input
          value={email}
          changeEvent={({ target }) => setEmail(target.value)}
          label="Email Address"
          inputName="email"
        />
        <Input
          value={password}
          changeEvent={({ target }) => setPassword(target.value)}
          label="Password"
          inputName="password"
          type="password"
        />
        <Input
          value={passwordConfirm}
          changeEvent={({ target }) => setPasswordConfirm(target.value)}
          label="Confirm Password"
          inputName="password"
          type="password"
          error={isPassError}
        />
        {isPassError ? <ErrorMessage>Passwords do not Match!</ErrorMessage> : null}
        <Button click={registerSubmit} type="button">
          {requestStatus === "loading" ? <Spinner size={35} /> : "Register"}
        </Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
