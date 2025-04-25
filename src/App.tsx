import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { theme } from "./theme/global";

import { Home } from "./pages/home";
import { Weather } from "./pages/weather";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </ThemeProvider>
  );
}
