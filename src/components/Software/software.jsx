import React, { Suspense, useRef } from "react";
import {
  Canvas,
  useThree,
  extend,
  useLoader,
  useFrame,
} from "react-three-fiber";
import { Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import sdStore from "../../assets/software/car.svg";
import handel from "../../assets/software/hand.svg";
import vrImage from "../../assets/software/Ai image.svg";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import "../ProjectsList/projectList.css";
import "./software.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three"; // Add this line

// extend({ OrbitControls });

// const CameraControls = () => {
//   const { camera, gl } = useThree();
//   const controlsRef = useRef();

//   useFrame(() => {
//     controlsRef.current.update();
//   });

//   return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
// };

// const Lights = () => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[1, 1, 1]} intensity={1} />
//     </>
//   );
// };

// const Model = ({ gltfPath, isHovered }) => {
//   const gltfProps = useLoader(GLTFLoader, gltfPath);
//   const [hovered, setHovered] = React.useState(false);

//   const initialRotation = gltfProps.scene.rotation.clone();
//   const hoverRotation = new THREE.Euler(0, Math.PI / 2, 0);

//   useFrame(() => {
//     const targetRotation = isHovered ? hoverRotation : initialRotation;
//     gltfProps.scene.rotation.copy(targetRotation);
//   });

//   return <primitive object={gltfProps.scene} />;
// };

// const ThreeDModelCard = ({ gltfPath, style }) => {
//   return (
//     <Canvas style={style}>
//       <Suspense fallback={null}>
//         <Model gltfPath={gltfPath} isHovered={true} />
//         <Lights />
//       </Suspense>
//       <CameraControls />
//       <Html>
//         <div
//           style={{
//             // position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             pointerEvents: "none",
//           }}
//         />
//       </Html>
//     </Canvas>
//   );
// };
function SoftwareContent() {
  const projectListStyles = {
    learnMore: {
      height: "2rem",
      width: "11rem",
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
    gridStyles: {
      width: "100%",
      height: "100%",
      borderRadius: "2.5rem",
      position: "relative",
      backgroundColor: "black",
      boxShadow: 5,
      elevation: "5",
    },
    imageStyles: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 1.1s", // Add the transition property for transform over 1.1 seconds
    },

    learnMore: {
      height: "2rem",
      width: "10rem",
      position: "absolute",
      bottom: 20,
      left: 10,
      color: "white", // Adjusted color to white for better visibility
      borderRadius: ".5rem",
      // zIndex: 22,
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px",
      transition: "transform 0.3s ease-out",
      "&:hover": {
        transform: "translateX(4px)",
      },
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
  };
  const canvasStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="softwareContainer">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                ...projectListStyles.gridStyles,
                ...projectListStyles.cardHover,
              }}
            >
              <img
                src={sdStore} // Replace with the actual image URL or source
                alt="immersive"
                style={projectListStyles.imageStyles}
              />
              <Box sx={projectListStyles.learnMore}>
                <button class="button">
                  <span>Learn More</span>
                </button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container gap={5}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    ...projectListStyles.gridStyles,
                    ...projectListStyles.cardHover,
                  }}
                >
                  <img
                    src={vrImage} // Replace with the actual image URL or source
                    alt="immersive"
                    style={projectListStyles.imageStyles}
                  />
                  <Box sx={projectListStyles.learnMore}>
                    <button class="button">
                      <span>Learn More</span>
                    </button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    ...projectListStyles.gridStyles,
                    ...projectListStyles.cardHover,
                  }}
                >
                  <img
                    src={handel} // Replace with the actual image URL or source
                    alt="immersive"
                    style={projectListStyles.imageStyles}
                  />
                  <Box sx={projectListStyles.learnMore}>
                    <button class="button">
                      <span>Learn More</span>
                    </button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ height: "100%" }}>
            <Box
              sx={{
                color: "white",
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
              }}
            >
              <Typography sx={{ fontWeight: "800", fontSize: "2.5rem" }}>
                SOFTWARE
              </Typography>
              <Typography sx={{ textAlign: "start" }}>
                {" "}
                We Build Tools That Reimagine Your Customer Experience
              </Typography>
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  border: "2px solid #8800B7",
                  borderRadius: ".5rem",
                  fontWeight: "bold",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default SoftwareContent;
