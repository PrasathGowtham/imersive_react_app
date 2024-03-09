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
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
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
  width: "100%",
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
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleDrawerItemClick =() => {
    setDrawerOpen(false);
  };
  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <MenuSegment>
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  HOME
                </Link>
              </Typography>
              <Typography
                style={{ marginRight: "20px", cursor: "pointer" }}
                onClick={() => navigate("/software")}
              >
                SOFTWARE
              </Typography>
              <Typography
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <Link to="3dservice" spy={true} smooth={true}>
                  3D SERVICES
                </Link>
              </Typography>
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                <Link to="project" spy={true} smooth={true}>
                  PROJECTS
                </Link>
              </Typography>

              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                <Link to="about" spy={true} smooth={true}>
                  ABOUT
                </Link>
              </Typography>
              {/* <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                <Link to="blog" spy={true} smooth={true}>
                  BLOG
                </Link>
              </Typography> */}
              <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
                <Link to="contact" spy={true} smooth={true}>
                  CONTACT
                </Link>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingLeft:"1rem"
                }}
              >
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  onClick={handleDrawerItemClick}
                  // duration={500}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                    HOME
                  </Typography>
                </Link>

                <Typography
                  sx={{ fontWeight: "bold", fontSize: "2rem" }}
                  onClick={() => navigate("/software")}
                >
                  SOFTWARE
                </Typography>
                <Link
                  to={"3dservice"}
                  onClick={handleDrawerItemClick}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  // duration={500}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                    3D SERVICES
                  </Typography>
                </Link>
                <Link
                  to={"project"}
                  onClick={handleDrawerItemClick}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  // duration={500}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                    PROJECTS
                  </Typography>
                </Link>
                <Link
                  to={"about"}
                  onClick={handleDrawerItemClick}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  // duration={500}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                    ABOUT
                  </Typography>
                </Link>
                <Link
                  to={"contact"}
                  spy={true}
                  smooth={true}
                  onClick={handleDrawerItemClick}
                  // offset={-70}
                  // duration={500}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                    CONTACT
                  </Typography>
                </Link>
              </Box>
            </DrawerList>
          </DrawerContainer>
        </Drawer>
      )}

      <StyledParentBox></StyledParentBox>
    </div>
  );
};

export default NavBar;
