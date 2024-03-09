import React from "react";
import guyImg from "../../assets/guyImg.png";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Icon1 from "../../assets/socialIcons/socialIconOne.svg";
import Icon2 from "../../assets/socialIcons/socialTwo.svg";
import Icon3 from "../../assets/socialIcons/socialThree.svg";
import Icon4 from "../../assets/socialIcons/socialFour.svg";
import blueGrain from "../../assets/bluegrains.jpg";
import VerticalText from "../custom/VerticalText";
import XrStore from "./XrStore";
import NavBar from "../navBar";

export default function QuantumEn() {
  const divStyle = {
    backgroundImage: `url(${guyImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };
  const blueGrainImg = {
    backgroundImage: `url(${blueGrain})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "529px",
    position: "relative",
  };
  return (
    <Grid container sx={{ fontFamily: "inherit" }}>
      {/* <NavBar/> */}
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Box sx={divStyle} color={"white"}>
          <Stack
            direction="row"
            spacing={5}
            sx={{ position: "absolute", bottom: "20px", right: "30px" }}
          >
            <img src={Icon1} />
            <img src={Icon2} />
            <img src={Icon3} />
            <img src={Icon4} />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={11} sm={11} md={5} xl={5}>
            <Box sx={blueGrainImg}></Box>
          </Grid>
          <Grid item xs={1} sm={1} md={1} xl={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "140px",
              }}
            >
              <VerticalText text={"FIT.AR"} />
              <VerticalText text={"FIT.AI"} />
              <VerticalText text={"3D XR STORE"} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <Box sx={{ height: "100%", borderLeft: "1px solid white" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 3,
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: 3,
                    padding: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "4em",
                      letterSpacing: "2px",
                      fontWeight: 600,
                      color: "white",
                      fontFamily: "inherit",
                    }}
                  >
                    Softwares
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A9A9A9",
                      width: { xs: "100%", md: "80%" },
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    We build tools that reimagine your customer experience.
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      size="large"
                      color="secondary"
                      sx={{ fontFamily: "inherit" }}
                    >
                      GET STARTED
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <XrStore />
      </Grid>
    </Grid>
  );
}
