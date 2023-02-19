import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Fab, Grid } from "@mui/material";
import { Add, PlayArrow } from "@mui/icons-material";
import { Stack } from "@mui/system";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://i.scdn.co/image/ab67706c0000da84500a00bb1d191ebcfa992d40"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    Drip
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://i.scdn.co/image/ab67706c0000da84f80dd9bef5aa206f67073f8a"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    Chill vibe
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    Liked Songs
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://i.scdn.co/image/ab67616d0000b273ff1a8147b45fdf45f86bc8e8"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    XPENSIVE
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://i.scdn.co/image/ab67616d0000b2734509ba71048df873e59a7ee9"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    Liked Songs
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="https://i.scdn.co/image/ab67616d0000b2739a949194e7bdd68eb8252d5f"
                alt="Live from space album cover"
              />
              <Box>
                <CardContent>
                  <Typography component="div" variant="h6" fontWeight={700}>
                    Relentless
                  </Typography>
                </CardContent>
              </Box>
            </Stack>
            <Box marginLeft={3}>
              <Fab color="success" aria-label="play">
                <PlayArrow fontSize="large" />
              </Fab>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
