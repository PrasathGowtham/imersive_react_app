import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import logoImmersive from "../assets/logo-White 1.svg";

const StyledAppBar = styled(AppBar)({
  position: "fixed",
  top: 20,
  zIndex: 1000,
  width: "90%",
  height: "55px",
  display: "flex",
  justifyContent: "space-between",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.5)",
});

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
});

const MenuSegment = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width:"100%"
});

// New styled component for the drawer icon
const DrawerIconButton = styled(IconButton)({
  backgroundColor: "#fff", // Set the background color to white
  borderRadius: "50%", // Make it circular
  color: "#000", // Set the color to black or your desired color
});

const NavigationSegment = styled("div")({
  display: "flex",
  alignItems: "center",
});

const DrawerList = styled(List)({
  width: "100%",
});

const StyledParentBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

// New styled components for the drawer
const DrawerContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const DrawerHeader = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: "16px",
});

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavItemClicked = () => {
    setDrawerOpen(false);
    // Add logic to handle navigation item click
  };

  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <MenuSegment>
            <Box sx={{display:"flex",alignItems:"center"}}>
              <img src={logoImmersive} alt="logo icon" />
              <Typography>IMERSIVE</Typography>
            </Box>

            {isSmallScreen && (
              // Use the new styled component for the drawer icon
              <DrawerIconButton onClick={toggleDrawer(true)} edge="start">
                <MenuIcon />
              </DrawerIconButton>
            )}
          </MenuSegment>

          {!isSmallScreen && (
            <NavigationSegment>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                HOME
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                SOFTWARE
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer", whiteSpace: "nowrap" }}>
                3D SERVICES
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                PROJECTS
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                ABOUT
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                BLOG
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                CONTACT
              </Typography>
            </NavigationSegment>
          )}
        </StyledToolbar>
      </StyledAppBar>

      {isSmallScreen && (
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          variant="temporary"
          hideBackdrop={false}
          onClose={toggleDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              backgroundColor: "#fff", // Set the background color to white
            },
          }}
        >
          <DrawerContainer>
            <DrawerHeader>
              <DrawerIconButton
                onClick={toggleDrawer(false)}
                style={{ color: "#000" }}
              >
                <MenuIcon />
              </DrawerIconButton>
            </DrawerHeader>
            <DrawerList>
              {[
                "HOME",
                "SOFTWARE",
                "3D SERVICES",
                "PROJECTS",
                "ABOUT",
                "BLOG",
                "CONTACT",
              ].map((text, index) => (
                <ListItem button key={text} onClick={handleNavItemClicked}>
                  <Typography>{text}</Typography>
                </ListItem>
              ))}
            </DrawerList>
          </DrawerContainer>
        </Drawer>
      )}

      <StyledParentBox></StyledParentBox>
    </div>
  );
};

export default NavBar;
