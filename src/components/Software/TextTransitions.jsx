import React from "react";
import carBackGround from "../../assets/lambo.jpg";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./software.css"
const BlurredContainer = styled("div")({
  backdropFilter: "blur(5px)",
  padding: "40px",
  width: "90%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
});

const ContentBox = styled(Box)({
  padding: "15px",
  textAlign: "left",
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

function TextTransitions() {
  const divStyle = {
    backgroundImage: `url(${carBackGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    zIndex: -1,
    marginTop:"4rem"
  };

  const fontStyle = {
    fontSize: "12px",
  };

  const fontStyleH = {
    fontSize: "14px",
  };

  return (
    <div className="solution">
    <Box style={divStyle}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        minHeight={"100%"}
      >
        <Grid item xs={12} sm={12} md={6} xl={6}>
        
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <BlurredContainer>
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
                <Typography sx={fontStyleH}>PolyCount</Typography>
                <Typography sx={fontStyle}>
                  Our team can create both Low poly ( optimized for web/ game
                  development) and High Poly assets( cinematic, videos) for your
                  3D Needs.
                </Typography>
              </ContentBox>
              <ContentBox>
                <Typography sx={fontStyleH}>Customized Solutions</Typography>
                <Typography sx={fontStyle}>
                  3D asset creation services offer tailored solutions for
                  various industries, including gaming, animation, architecture,
                  and product design, ensuring that clients receive assets
                  precisely suited to their needs and specifications.
                </Typography>
              </ContentBox>
              <ContentBox>
                <Typography sx={fontStyleH}>
                  Web & Gaming Optimized Outputs
                </Typography>
                <Typography sx={fontStyle}>
                  3D asset creation services specialize in optimizing assets for
                  web and gaming platforms, ensuring efficient use of resources
                  such as memory and processing power while maintaining visual
                  fidelity, resulting in smooth performance and immersive
                  experiences for users.
                </Typography>
              </ContentBox>
              <ContentBox>
                <Typography sx={fontStyleH}>Streamlined Workflow </Typography>
                <Typography sx={fontStyle}>
                  By outsourcing 3D asset creation, businesses can streamline
                  their production processes, saving time and resources while
                  maintaining focus on core activities such as game development,
                  marketing campaigns, or architectural visualization.
                </Typography>
              </ContentBox>
              <ContentBox>
                <Typography sx={fontStyleH}>High-Quality Outputs</Typography>
                <Typography sx={fontStyle}>
                  These services utilize advanced techniques and software to
                  produce high-quality 3D models, textures, and animations,
                  meeting industry standards and exceeding client expectations
                  for realism and detail.
                </Typography>
              </ContentBox>
            </Box>
          </BlurredContainer>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default TextTransitions;
