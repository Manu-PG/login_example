import { useRouteError } from "react-router-dom";
import errorIMG from "../../assets/images/error_icon_148538.png";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <img src={errorIMG} />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.name || error.message}</i>
      </p>
    </div>
  );
}
