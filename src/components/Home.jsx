import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import coverImg from "../assets/tempCover.jpeg";
import logoImmersive from "../assets/logo-White 1.svg"; // Import the Menu icon
import ClientListScroll from "./ClientListScroll";

const StyledParentBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  // alignItems: 'center',
  // height: '80vh',
});

const StyledCard = styled(Card)({
  width: "100%",
  position: "relative",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: 550,
});

const TextOverLay = styled("div")({
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white", // Text color
});

const StyledAppBar = styled(AppBar)({
  position: "fixed",
  top: 20,
  zIndex: 1000,
  width: "90%",
  height: "55px",
  display: "flex",
  justifyContent: "center",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.5)",
});

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly", // Place items at the start and end of the toolbar
  alignItems: "center", // Center items vertically
  overflow: "hidden",
});

const MenuSegment = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NavigationSegment = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ButtonsSegment = styled("div")({
  display: "flex",
  alignItems: "center",
});

function NavBar() {
  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <MenuSegment>
            {/* <MenuIcon />  */}
            <img src={logoImmersive} alt="logo icon" />
            <Typography>IMERSIVE</Typography>
          </MenuSegment>

          <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
            HOME
          </Typography>
          <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
            SOFTWARE
          </Typography>
          <Typography style={{ marginRight: "20px", cursor: "pointer" }}>
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
        </StyledToolbar>
      </StyledAppBar>
      <StyledParentBox>
        {/* <StyledCard >
                    <StyledCardMedia

                        component={"img"}
                        image={coverImg}
                        alt='Cover Image'
                    />
                    <TextOverLay>
                        <Typography variant="h3" component="h1" gutterBottom>
                            ELEVATING THE
                        </Typography>
                        <Typography variant="h3" component="h1" gutterBottom>
                            IMMERSIVE WEB
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        Learn more about what we do!
                    </Typography>
                    </TextOverLay>

                </StyledCard> */}
      </StyledParentBox>
    </div>
  );
}

export default NavBar;
