import {
  Favorite,
  FavoriteBorder,
  Fullscreen,
  Loop,
  Pause,
  PictureInPicture,
  PlayArrow,
  QueueMusic,
  Shuffle,
  SkipNext,
  SkipPrevious,
  SpeakerGroup,
  VolumeUp,
} from "@mui/icons-material";
import {
  BottomNavigation,
  Checkbox,
  Divider,
  Fab,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function Navbar() {
  const [play, setPlay] = useState(true);
  return (
    <Box>
      <Paper
        sx={{
          zIndex: "100000",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Divider />
        <BottomNavigation
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "7em",
          }}
          showLabels
        >
          <Stack
            flex="1"
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            py={1}
          >
            <Box
              p={1}
              sx={{ alignSelf: "normal" }}
              component="img"
              src="https://i.scdn.co/image/ab67616d0000485119798eaffbc037d3a21dcf37"
            ></Box>
            <Box alignSelf="center">
              <Typography variant="p">Iraadey</Typography>
              <Typography variant="body2" color="text.secondary">
                Abdul hanan
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color="success" />}
              />
              <PictureInPicture />
            </Box>
          </Stack>

          <Stack justifyContent="center" py={1} flex="2">
            <Stack alignItems="center" alignSelf="center" direction="row">
              <Shuffle sx={{ marginRight: "10px" }} />
              <SkipPrevious />

              <Fab
                sx={{ margin: "0 10px 0 10px" }}
                color="primary.text"
                aria-label="play"
                size="small"
                onClick={() => setPlay(!play)}
              >
                {play ? (
                  <PlayArrow fontSize="large" />
                ) : (
                  <Pause fontSize="large" />
                )}
              </Fab>

              <SkipNext />
              <Loop sx={{ marginLeft: "10px" }} />
            </Stack>
            <Box alignSelf="center" sx={{ width: "60%" }}>
              <Slider
                size="medium"
                sx={{
                  color: "white",
                  "& .MuiSlider-thumb": {
                    width: 0,
                    height: 0,

                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 0px`,
                    },
                  },
                }}
                defaultValue={70}
              />
            </Box>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flex="1"
          >
            <QueueMusic sx={{ marginRight: "5px" }} />
            <SpeakerGroup sx={{ margin: "0 5px 0 5px" }} />
            <VolumeUp sx={{ margin: "0 5px 0 5px" }} />
            <Box sx={{ display: "flex" }} width="30%">
              <Slider
                size="small"
                sx={{
                  color: "white",
                  "& .MuiSlider-thumb": {
                    width: 0,
                    height: 0,
                  },
                }}
                defaultValue={70}
              />
            </Box>
            <Fullscreen sx={{ margin: "0 5px 0 5px" }} />
          </Stack>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Navbar;
