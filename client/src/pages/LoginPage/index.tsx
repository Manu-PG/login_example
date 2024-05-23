import { FormFooter, LoginContainer, LoginForm } from "./LoginPage.styled";
import { useEffect, useState } from "react";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import Link from "../../components/ui/Link";
import { useUser } from "../../providers/UserProvider/UserContext/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/svg/spinner";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemeberCheched, setIsRememberChecked] = useState<boolean>(false);
  const { user, requestStatus, loginUser } = useUser();
  const navigate = useNavigate();

  console.log(user);

  const submit = () => {
    const user = {
      username: email,
      password: password,
    } as userLogin;
    loginUser(user);
  };

  useEffect(() => {
    if (user !== undefined) navigate("/");
  }, [user]);

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
