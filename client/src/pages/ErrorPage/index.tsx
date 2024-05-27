import { useRouteError } from "react-router-dom";
import errorIMG from "../../assets/images/error_icon_148538.png";
import { ErrorHolder } from "./ErrorPage.styled";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <ErrorHolder>
      <img src={errorIMG} />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Something went wrong, have a cookie: 🍪</i>
      </p>
    </ErrorHolder>
  );
}
