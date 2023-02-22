import { PlayArrow } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Artist({ data, sectionHeading }) {
  const [visibility, setVisibility] = useState(-1);

  const visibilityHandler = (index) => {
    setVisibility(index);
  };
  return (
    <Box>
      <Stack
        mb={3}
        mt={5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography sx={{fontSize:{sm:"1.5rem",xs:"1.2rem"}}} fontWeight={700}>
          {sectionHeading}
        </Typography>
        <Typography color="text.secondary" fontWeight={500} component="a">
          Show all
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {data.map((card, index) => {
          return (
            <Grid
              item
              md={3}
              sm={6}
              xs={12}
              sx={{ mx: { sm: 0, xs: 10 } }}
              justifyContent="center"
            >
              <Card
                onMouseEnter={() => visibilityHandler(index)}
                onMouseLeave={() => setVisibility("hidden")}
              >
                <CardActionArea sx={{ padding: "1em" }}>
                  <CardMedia
                    component="img"
                    image={card.imgUrl}
                    alt="green iguana"
                    sx={{
                      borderRadius: "50%",
                      maxHeight: "182px",
                      maxWidth: "182px",
                    }}
                  />
                  <CardContent sx={{ padding: "16px 16px 16px 0" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      fontWeight={700}
                      component="div"
                    >
                      {card.artistName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <Box
                    visibility={`${
                      visibility === index ? "visible" : "hidden"
                    }`}
                  >
                    <Fab
                      sx={{ position: "absolute", top: "50%", left: "70%" }}
                      color="success"
                      aria-label="play"
                      size="medium"
                    >
                      <PlayArrow fontSize="large" />
                    </Fab>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Artist;
