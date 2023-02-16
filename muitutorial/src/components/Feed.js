import { Box } from "@mui/system";
import React from "react";
import { Post } from "./Post";

function Feed() {
  return (
    <Box bgcolor={""} flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
