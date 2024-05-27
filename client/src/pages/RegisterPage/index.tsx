import { ErrorMessage, RegisterContainer, RegisterForm } from "./RegisterPage.styled";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/svg/spinner";
import { useRegister } from "../../providers/UserProvider/UserContext/userRegister";

const RegisterPage = () => {
  const { requestStatus, registerUser } = useRegister();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errorMesssage, setErrorMessage] = useState<string>();

  const registerSubmit = () => {
    const isPasswordWrong = password != passwordConfirm;
    if (isPasswordWrong) setErrorMessage("Passwords do not match!");
    else {
      setErrorMessage("");
      const user = {
        username: email,
        password: password,
      } as userLogin;
      registerUser(user)
        .then(() => navigate("/"))
        .catch((error) => setErrorMessage(error.message));
    }
  };

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
        />
        {errorMesssage ? <ErrorMessage>{errorMesssage}</ErrorMessage> : null}
        <Button click={registerSubmit} type="button">
          {requestStatus === "loading" ? <Spinner size={35} /> : "Register"}
        </Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
