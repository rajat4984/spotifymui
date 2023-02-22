import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Fab, Grid } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Stack } from "@mui/system";
import recentData from "../data/recent.json";

function Goodevening() {
  const [visibility, setVisibility] = useState(-1);

  const visibilityHandler = (index) => {
    setVisibility(index);
  };
  return (
    <Box>
      <Typography mb={3} mt={5} fontSize="1.7rem" fontWeight={700}>
        Good evening
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {recentData.map((card, index) => {
            return (
              <Grid key={index} item xs={6} lg={4}>
                <Card
                  onMouseEnter={() => visibilityHandler(index)}
                  onMouseLeave={() => setVisibility("hidden")}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Stack width="80%" direction="row" alignItems="center">
                    <CardMedia
                      component="img"
                      sx={{ width: 80 }}
                      image={`${card.imgUrl}`}
                      alt="Live from space album cover"
                    />
                    <Box>
                      <CardContent>
                        <Typography
                          component="div"
                          variant="h6"
                          fontWeight={700}
                        >
                          {card.title}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Stack>
                  <Box
                    visibility={`${
                      visibility === index ? "visible" : "hidden"
                    }`}
                    sx={{ marginRight: "10px" }}
                  >
                    <Fab color="success" aria-label="play">
                      <PlayArrow fontSize="large" />
                    </Fab>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Goodevening;
