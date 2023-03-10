import styled from "@emotion/styled";
import { ArrowDropDown, OpenInNew } from "@mui/icons-material";
import {
  Avatar,
  Menu,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Pagination,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import Albums from "./Albums";
import Goodevening from "./Goodevening";
import jumpBackData from "../data/jumpBack.json";
import recommendedData from "../data/recommended.json";
import artistData from "../data/artistData.json";
import Artist from "./Artist";

const AccountAvatar = styled(Stack)({
  flexDirection: "row",
  backgroundColor: "#262626",
  alignItems: "center",
  padding: "6px",
  borderRadius: "100px ",
});

function Feed() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box flex={5} px={2}>
      <Container sx={{ marginTop: "40px" }}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10000,
            padding: "5px 0 5px 0",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Box spacing={3}>
              <Pagination size="large" count={0} variant="outlined" />
            </Box>
            <AccountAvatar
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                sx={{ height: 25, width: 25 }}
                alt="Remy Sharp"
                src="https://i.scdn.co/image/ab6775700000ee85ff9bd3511e7cec90cf2f0177"
              />
              <Typography pl={1} variant="p">
                Rajat
              </Typography>

              <ArrowDropDown />
            </AccountAvatar>
          </Stack>
        </Box>

        {/* GOOD EVENING SECTION */}
        <Goodevening />

        {/* Jump back in  */}
        <Albums data={jumpBackData} sectionHeading="Jump Back In" />

        {/* recommended for today  */}
        <Albums data={recommendedData} sectionHeading="Recommended for today" />

        {/*  favourite artis  */}
        <Artist data={artistData} sectionHeading="Your favorite artists" />

        {/* Jump back in  */}
        <Albums data={jumpBackData} sectionHeading="Jump Back In" />

        {/* recommended for today  */}
        <Albums data={recommendedData} sectionHeading="Recommended for today" />
      </Container>

      {/* ------------------DROP-DOWN-MENU---------------- */}

      <Menu
        sx={{ width: "90%", marginRight: "10px" }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemText>Account</ListItemText>
            <ListItemIcon>
              <OpenInNew fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemText>Set up your Family plan</ListItemText>
            <ListItemIcon>
              <OpenInNew fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Feed;
