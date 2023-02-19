import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GoodeveningCard from "./GoodeveningCard";

function Goodevening() {
  return (
    <Box>
      <Typography mb={3} mt={5} variant="h4" fontWeight={700}>
        Good evening
      </Typography>
      <GoodeveningCard />
    </Box>
  );
}

export default Goodevening;
