import { Card, ListItemPrefix } from "@material-tailwind/react";
import React from "react";
import {
  PresentationChartBarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { Link, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SideMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }; // mine until

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("aiScribeAuthToken");
    localStorage.removeItem("aiScribeUserName");
    console.log("Navigating");
    navigate("/login");
  };

  return (
    <div>
      <Card className="h-[calc(100vh)] max-w-[15rem] p-4 bg-[#313A46] dark:bg-[#1E293B] rounded-none text-white shadow-xl outline-8 shadow-blue-gray-900/5">
        <div className="mb-5 p-4">
          <Typography variant="h5" color="blue-gray">
            <div className="logo w-auto h-5">
              <img
                src="https://res.cloudinary.com/dngfmzv2g/image/upload/v1695238647/ai-scribe-low-resolution-logo-color-on-transparent-background_pxx3op.png"
                alt="Task Unity"
              />
            </div>
          </Typography>
        </div>
        <List className="text-white">
          <Link className="flex flex-row w-[90%] my-2" to="/">
            <ListItem className="py-4">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link className="flex flex-row w-[90%] my-2" to="/generate-story">
            <ListItem className="py-4 ">
              <ListItemPrefix>
                <SparklesIcon className="h-5 w-5" />
              </ListItemPrefix>
              Generate Story
            </ListItem>
          </Link>
          <Link className="flex flex-row w-[90%] my-2" to="/my-story">
            <ListItem className="py-4">
              <ListItemPrefix>
                <RocketLaunchIcon className="h-5 w-5" />
              </ListItemPrefix>
              My Stories
            </ListItem>
          </Link>
          <div className="horizontal-line flex justify-center">
            <hr className="my-2 border-blue-gray-50 w-[90%]" />
          </div>
          <Link
            onClick={handleLogout}
            className="flex flex-row w-[90%] my-2"
            to={"/login"}
          >
            <ListItem className="py-4">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Logout
            </ListItem>
          </Link>
        </List>
      </Card>
    </div>
  );
}

export default SideMenu;
