import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

import AppRoutes from "./AppRoutes";

export default function SignInSide() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <AppRoutes />
      </Grid>
    </ThemeProvider>
  );
}
