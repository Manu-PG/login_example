import Spinner from "../../assets/svg/spinner";
import Button from "../../components/ui/Button";
import { useLogout } from "../../providers/UserProvider/UserContext/userLogout";
import { ButtonHolder, UserBar, UserText } from "./LandingPage.styled";

const LandingPage = () => {
  const { user, requestStatus, logoutUser } = useLogout();
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
