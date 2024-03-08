import { createCustomTheme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useSettings from "./hooks/useSettings";
import "./i18n";
import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(routes());
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
