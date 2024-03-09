import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import blueImg from "../../assets/pictures/softwareTwo.jpg";
import imgOne from "../../assets/pictures/img_1.jpg";
import imgTwo from "../../assets/pictures/img_2.jpg";
import imgThree from "../../assets/pictures/img_3.jpg";
import imgFour from "../../assets/pictures/img_4.jpg";
import imgFive from "../../assets/pictures/img_5.jpg";
import BelowFitAr from "./BelowFitAr";
import { useNavigate } from "react-router-dom";
export default function SoftwareThree() {
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: `url(${blueImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
    position: "relative",
  };
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Box sx={divStyle}></Box>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{
              height: "303px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                color: "white",
                letterSpacing: "1%",
                fontWeight: 700,
              }}
            >
              FIT.AI
            </Typography>
            <Typography sx={{ color: "#A3A3A3" }}>
              Solving the Age old question “ what is my size” in one click
            </Typography>
            <Button variant="outlined" color="secondary" size={"large"}>
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img src={imgOne} alt="ai_powered" width={"100%"} />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "white",
                textAlign: "left",
                width: "80%",
              }}
            >
              AI Powered
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E2E2E2",
                height: "auto",
                width: "80%",
                textAlign: "left",
              }}
            >
              Artificial Intelligence powered computer vision module that
              recommends user fit based on brand sizing guidelines.
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "white",
                textAlign: "left",
                width: "80%",
              }}
            >
              Personalized sizing recommendation
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E2E2E2",
                height: "auto",
                width: "80%",
                textAlign: "left",
              }}
            >
              Your customers should not guess or take a measuring tape to figure
              their size out. Our solution recommends a size based on each
              user's individual size and only requires height and gender inputs.
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6}>
          <img src={imgTwo} alt="personal size recommendation" width={"100%"} />
        </Grid>

        <Grid item md={6}>
          <img
            src={imgThree}
            alt="plugin for shopping solution"
            width={"100%"}
          />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E2E2E2",
                height: "auto",
                width: "80%",
                textAlign: "left",
              }}
            >
              Plug in API on top of existing shopping solutions like Shopify and
              custom websites
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E2E2E2",
                height: "auto",
                width: "80%",
                textAlign: "left",
              }}
            >
              Web based solution leveraging Mobile camera and inbuilt features.
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6}>
          <img
            src={imgFour}
            alt="personal size recommendation"
            width={"100%"}
          />
        </Grid>

        <Grid item md={6}>
          <img
            src={imgFive}
            alt="personal size recommendation"
            width={"100%"}
          />
        </Grid>

        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 4,
            }}
          >
            <div style={{ width: "80%", textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Demo
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#E2E2E2",
                  height: "auto",
                  marginTop: "30px",
                }}
              >
                Join our Waitlist today and get priority access.
              </Typography>
            </div>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2rem",
              }}
              onClick={() => navigate("/")}
            >
              <Button variant="outlined" size="large" color="secondary">
                Contact us
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <BelowFitAr/> */}
    </>
  );
}
