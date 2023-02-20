import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Albums() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50%"
                image="https://i.scdn.co/image/ab67616d00001e0284fff79fda608ded4c568d34"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Praises
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sharan
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Albums;
