import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router";
import { pagePaths } from "../../utils/constants";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleMenu = (link) => {
    closeMenu();
    navigate(link);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = pagePaths.login;
  };
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Typography variant="h4" className={classes.menuButton}>
            Smolr
          </Typography>
          <Typography
            variant="h6"
            className={classes.menuButton}
            style={{ marginLeft: 30 }}
          >
            About
          </Typography>
        </Box>
        <Box className={classes.right}>
          {user && (
            <div>
              <Typography
                variant="h6"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={openMenu}
                className={classes.menuButton}
              >
                {user.username} <KeyboardArrowDownOutlined />
              </Typography>
              <Menu
                id="User menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                className={classes.menu}
              >
                <MenuItem onClick={() => handleMenu(pagePaths.home)}>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={() => handleMenu(pagePaths.settings)}>
                  Settings
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
