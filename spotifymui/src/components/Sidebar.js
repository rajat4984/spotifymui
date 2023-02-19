import styled from "@emotion/styled";
import {
  AddBox,
  Bookmark,
  Favorite,
  Home,
  LibraryAdd,
  Search,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BsSpotify } from "react-icons/bs";

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [focus, setFocus] = useState(0);

  const handleListTextClick = (index) => {
    setFocus(index);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box flex={1} px={2} py={1} position="sticky">
      <Typography variant="h4" fontWeight={500} my={2}>
        <Typography variant="h3" pr={1} component="span">
          <BsSpotify />
        </Typography>
        Spotify <Typography component="sup">®</Typography>{" "}
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItemButton>

        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <LibraryAdd />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItemButton>
      </List>

      <List
        sx={{ marginTop: "1rem" }}
        component="nav"
        aria-label="main mailbox folders"
      >
        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <AddBox />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItemButton>

        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <Favorite color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Liked Songs" />
        </ListItemButton>

        <ListItemButton
          sx={{ borderRadius: "5px" }}
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon bgcolor="secondary">
            <Bookmark color="success" />
          </ListItemIcon>
          <ListItemText primary="Your Episodes" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem>
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="p"
                onClick={(e) => handleListTextClick(6)}
                style={{ cursor: "pointer" }}
                color={
                  focus === 6
                    ? { color: "rgba(207, 207, 207, 0.9)" }
                    : { color: "rgba(207, 207, 207, 0.6)" }
                }
              >
                Chill Vibe
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="p"
                onClick={(e) => handleListTextClick(7)}
                style={{ cursor: "pointer" }}
                color={
                  focus === 7
                    ? { color: "rgba(207, 207, 207, 0.9)" }
                    : { color: "rgba(207, 207, 207, 0.6)" }
                }
              >
                My Playlist #14
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="p"
                onClick={(e) => handleListTextClick(8)}
                style={{ cursor: "pointer" }}
                color={
                  focus === 8
                    ? { color: "rgba(207, 207, 207, 0.9)" }
                    : { color: "rgba(207, 207, 207, 0.6)" }
                }
              >
                Sidhu
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
