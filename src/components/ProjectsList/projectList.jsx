import React from "react";
import "./projectList.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import sampleImage from "../../assets/projectList/Component 15.png";
import dressSample from "../../assets/projectList/Component 9.png"
import projectSample1 from "../../assets/projectList/Component 10.png"
import projectSample2 from "../../assets/projectList/Component 11.png"
import projectSample3 from "../../assets/projectList/Component 13.png"
import projectSample6 from "../../assets/projectList/Component 14.png"
import projectSample7 from "../../assets/projectList/Component 16.png"
import projectSample4 from "../../assets/projectList/Component 12.png"
import projectSample5 from "../../assets/projectList/Component 17.png"
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
      backgroundColor:"black"
    },
    imageStyles: {
      width: "100%",
      height: "100%",
      objectFit: "fill",
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
                src={dressSample} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample1} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample7} // Replace with the actual image URL or source
                alt="Imersive"
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
                alt="Imersive"
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
                src={projectSample2} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample6} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample4} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample3} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample1} // Replace with the actual image URL or source
                alt="Imersive"
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
                src={projectSample5} // Replace with the actual image URL or source
                alt="Imersive"
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
