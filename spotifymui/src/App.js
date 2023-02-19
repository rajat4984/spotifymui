import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Demo from "./components/Demo"

function App() {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontSize: 12,
    },
  });
  return (
    <Box bgcolor="backgrund.default">
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Stack direction="row">
          <Sidebar />
          <Feed />
        </Stack>
      </ThemeProvider>
    </Box>
  );
}

export default App;
