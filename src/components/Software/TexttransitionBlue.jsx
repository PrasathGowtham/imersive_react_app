import React from "react";
import blueMix from "../../assets/3dservices/Frame66.png";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BlurredContainer = styled("div")({
  backdropFilter: "blur(5px)",
  padding: "40px",
  objectFit:"cover",
  width: "90%",
  height: "100%",
});

const ContentBox = styled(Box)({
  padding: "15px",
  textAlign: "left",
  objectFit:"cover",
  color: "white",
  zIndex: 2,
  position: "relative",
  fontSize: "13px",
});

const VerticalLine = styled(Box)({
  position: "relative",
  width: "1px", // Adjust the width of the line as needed
  height: "100%", // Adjust the height of the line as needed
  backgroundColor: "white", // Adjust the color of the line as needed
});

const DotContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const Dot = styled(Box)({
  width: "8px", // Adjust the width of the dot as needed
  height: "8px", // Adjust the height of the dot as needed
  borderRadius: "50%",
  backgroundColor: "white", // Adjust the color of the dot as needed
  position: "relative",
  zIndex: 1,
});

const Circle = styled(Box)({
  position: "absolute",
  width: "15px", // Adjust the diameter of the circle as needed
  height: "15px", // Adjust the diameter of the circle as needed
  borderRadius: "50%",
  border: "1px solid white", // Adjust the border properties as needed
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
});

export default function TexttransitionBlue() {
  const divStyle = {
    backgroundImage: `url(${blueMix})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    zIndex: -1,
  };

  const fontStyle = {
    fontSize: "12px",
  };

  const fontStyleH = {
    fontSize: "14px",
  };
  return (
    <Box style={divStyle}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        minHeight={"100%"}
      >
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <BlurredContainer>
            <Box sx={{ paddingLeft: "18px" }}>
              <Typography
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                mb={3}
              >
                CGI & VFX
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <Box sx={{ padding: "25px" }}>
                <VerticalLine>
                  <DotContainer>
                    <Dot />
                    <Circle />
                  </DotContainer>
                </VerticalLine>
              </Box>
              <Box>
                <ContentBox>
                  <Typography sx={fontStyleH}>
                    Creative Visualization
                  </Typography>
                  <Typography sx={fontStyle}>
                    CGI video creation services bring concepts to life through
                    visually stunning animations and effects, allowing clients
                    to showcase products, concepts, or stories in captivating
                    and imaginative ways.
                  </Typography>
                </ContentBox>
                <ContentBox>
                  <Typography sx={fontStyleH}>
                    Versatile Applications
                  </Typography>
                  <Typography sx={fontStyle}>
                    These services cater to diverse industries such as
                    advertising, entertainment, education, and engineering,
                    offering versatile solutions ranging from product
                    demonstrations and architectural visualizations to special
                    effects in films and commercials.
                  </Typography>
                </ContentBox>
                <ContentBox>
                  <Typography sx={fontStyleH}>Technical Expertise</Typography>
                  <Typography sx={fontStyle}>
                    Our team includes skilled artists, animators, and
                    technicians proficient in industry-standard software and
                    techniques, ensuring the delivery of high-quality visuals
                    that meet clients' specifications and exceed expectations.
                  </Typography>
                </ContentBox>
                <ContentBox>
                  <Typography sx={fontStyleH}>Mixed Media VFX</Typography>
                  <Typography sx={fontStyle}>
                    By outsourcing 3D asset creation, businesses can streamline
                    Leveraging a combination of live-action footage, CGI,
                    animation, and other visual effects techniques, mixed media
                    VFX seamlessly integrates various elements to create
                    immersive and captivating visual experiences in films,
                    television, and advertisements.
                  </Typography>
                </ContentBox>
                <ContentBox>
                  <Typography sx={fontStyleH}>Hype Creation</Typography>
                  <Typography sx={fontStyle}>
                    Looking to generate buzz around your product or story? Our
                    team excels in crafting short-form content tailored for
                    social media platforms like Instagram reels and YouTube
                    shorts, igniting excitement, and fostering engagement among
                    audiences.
                  </Typography>
                </ContentBox>
              </Box>
            </Box>
          </BlurredContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}></Grid>
      </Grid>
    </Box>
  );
}
