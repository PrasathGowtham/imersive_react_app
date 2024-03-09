import React from "react";
import "./projectList.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import sampleImage from "../../assets/projectList/Component 16.svg";
import ClientListScroll from "../ClientListScroll";
import ScrollingLogos from "./scrollingList";
function ProjectList() {
  const projectListStyles = {
    gridStyles: {
      width: "100%",
      height: "10rem",
      display: "flex",
      flexDirection: "column",
      borderRadius: ".5rem",
      position: "relative",
    },
    imageStyles: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 1.1s", // Add the transition property for transform over 1.1 seconds
    },
    cardHover: {
      "&:hover img": {
        transform: "scale(1.2)", // Add the transform property on hover to scale the image
      },
      cursor: "pointer",
      // This property ensures the image covers the entire space while maintaining aspect ratio
    },
    learnMore: {
      height: "2rem",
      width: "12rem",
      position: "absolute",
      bottom: 20,
      left: 10,
      color: "white", // Adjusted color to white for better visibility
      borderRadius: ".5rem",
      zIndex: 22,

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px",
      transition: "transform 0.3s ease-out",
      "&:hover": {
        transform: "translateX(4px)",
      },
    },
  };
  return (
    <>
      <div className="projectListContainer" id="project">
        <Grid container spacing={2} sx={{padding:{md:"0 5rem",xs:"0 2rem"}}}>
          <Grid item xs={12} md={6} lg={9}>
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={6}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={6}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={3}>
            {" "}
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={9}>
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              {" "}
              <img
                src={sampleImage} // Replace with the actual image URL or source
                alt="Your Image Alt Text"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button className="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <ScrollingLogos />
      </div>

    </>
  );
}

export default ProjectList;
