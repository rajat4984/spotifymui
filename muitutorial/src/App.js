import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <SideBar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
