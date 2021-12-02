import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "../Header";
import useStyles from "./styles";
import { pagePaths } from "../../utils/constants";
import {
  Home,
  LaptopMacOutlined,
  Link,
  Person,
  Settings,
} from "@material-ui/icons";
import { useNavigate } from "react-router";
import { Box } from "@material-ui/core";

const menus = [
  { text: "Home", link: pagePaths.home, icon: <Home /> },
  { text: "Links", link: pagePaths.links, icon: <Link /> },
  { text: "Settings", link: pagePaths.settings, icon: <Settings /> },
  { text: "Admin", link: pagePaths.admin, icon: <Person /> },
  { text: "Developer", link: pagePaths.developer, icon: <LaptopMacOutlined /> },
];

export default function Sidebar({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSidebarMenu = (link) => {
    navigate(link);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav">
          {menus.map((menu) => (
            <ListItem
              button
              key={menu.text}
              selected={window.location.pathname === menu.link}
              onClick={() => handleSidebarMenu(menu.link)}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>{children}</Box>
      </main>
    </div>
  );
}
