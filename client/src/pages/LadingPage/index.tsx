import Spinner from "../../assets/svg/spinner";
import Button from "../../components/ui/Button";
import { useUser } from "../../providers/UserProvider/UserContext/useUser";
import { ButtonHolder, UserBar, UserText } from "./LandingPage.styled";

const LandingPage = () => {
  const { user, requestStatus, logoutUser } = useUser();
  return (
    <UserBar>
      <UserText>{`User: ${user?.username} Type: ${user?.role}`}</UserText>
      <ButtonHolder>
        <Button click={logoutUser} type="button">
          {requestStatus === "loading" ? <Spinner size={35} /> : "Logout"}
        </Button>
      </ButtonHolder>
    </UserBar>
  );
};

export default LandingPage;
