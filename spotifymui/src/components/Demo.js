import * as React from "react";
import Menu from "@mui/material/Menu";
import styled from "@emotion/styled";
import { ArrowDropDown, OpenInNew } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";

const AccountAvatar = styled(Stack)({
  flexDirection: "row",
  backgroundColor: "#262626",
  alignItems: "center",
  padding: "6px",
  borderRadius: "100px ",
});

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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

      <Menu
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
        <Paper sx={{ width: 220 }}>
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
        </Paper>
      </Menu>
    </div>
  );
}
