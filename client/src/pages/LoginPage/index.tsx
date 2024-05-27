import { ErrorMessage, FormFooter, LoginContainer, LoginForm } from "./LoginPage.styled";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import Link from "../../components/ui/Link";

import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/svg/spinner";
import { useLogin } from "../../providers/UserProvider/UserContext/useLogin";

const LoginPage = () => {
  const { requestStatus, loginUser } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemeberCheched, setIsRememberChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const submit = () => {
    const user = {
      username: email,
      password: password,
    } as userLogin;
    loginUser(user)
      .then(() => navigate("/"))
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <LoginContainer>
      <LoginForm>
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
        <Checkbox
          label="Remember me"
          checked={isRemeberCheched}
          onChange={({ target }) => setIsRememberChecked(target.checked)}
        />
        {requestStatus === "error" ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        <Button type="button" click={submit}>
          {requestStatus === "loading" ? <Spinner size={35} /> : "Sign in"}
        </Button>
        <FormFooter>
          <Link href="/register" label="Don't have an account? Sign Up" />
        </FormFooter>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
