import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/MainTheme";

import AppRoutes from "./AppRoutes";
import { UserProvider } from "../providers/UserProvider/UserContext";

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}
