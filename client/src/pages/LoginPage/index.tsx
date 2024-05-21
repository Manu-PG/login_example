import { FormFooter, LoginContainer, LoginForm } from "./LoginPage.styled";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import Link from "../../components/ui/Link";
import { postLogin } from "../../api/user";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemeberCheched, setIsRememberChecked] = useState<boolean>(false);

  const submit = () => {
    const userInfo = {
      userName: email,
      password: password,
    } as userLogin;
    postLogin(userInfo).then((data) => console.log(data));
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
        <Button type="button" value="Sign in" click={submit} />
        <FormFooter>
          <Link href="#" label="Forgot password?" />
          <Link href="#" label="Don't have an account? Sign Up" />
        </FormFooter>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
