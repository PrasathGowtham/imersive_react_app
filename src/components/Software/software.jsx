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

import { Box, Button, Card, Grid, Typography } from "@mui/material";
import sampleImage from "../../assets/projectList/Component 16.svg";
import "./software.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sampleModel from "../../assets/floating_island.glb";
import sampleModel2 from "../../assets/portal.glb";
import sampleModel3 from "../../assets/trees.glb";
import * as THREE from "three"; // Add this line

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
    </>
  );
};

const Model = ({ gltfPath, isHovered }) => {
  const gltfProps = useLoader(GLTFLoader, gltfPath);
  const [hovered, setHovered] = React.useState(false);

  const initialRotation = gltfProps.scene.rotation.clone();
  const hoverRotation = new THREE.Euler(0, Math.PI / 2, 0);

  useFrame(() => {
    const targetRotation = isHovered ? hoverRotation : initialRotation;
    gltfProps.scene.rotation.copy(targetRotation);
  });

  return <primitive object={gltfProps.scene} />;
};

const ThreeDModelCard = ({ gltfPath, style }) => {
  return (
    <Canvas style={style}>
      <Suspense fallback={null}>
        <Model gltfPath={gltfPath} isHovered={true} />
        <Lights />
      </Suspense>
      <CameraControls />
      <Html>
        <div
          style={{
            // position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </Html>
    </Canvas>
  );
};
function SoftwareContent() {
  const projectListStyles = {
    gridStyles: {
      width: "100%",
      height: "100%",
      borderRadius: ".5rem",
      position: "relative",
      backgroundColor: "white",
    },
    imageStyles: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 1.1s", // Add the transition property for transform over 1.1 seconds
    },

    learnMore: {
      height: "2rem",
      width: "8rem",
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
  };
  const canvasStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="softwareContainer">
        <Grid container spacing={5} >
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ ...projectListStyles.gridStyles }}>
              <ThreeDModelCard gltfPath={sampleModel} style={canvasStyles} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container gap={5}>
              <Grid item xs={12}>
                <Card sx={{ ...projectListStyles.gridStyles }}>
                  <ThreeDModelCard
                    gltfPath={sampleModel2}
                    style={canvasStyles}
                  />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ ...projectListStyles.gridStyles }}>
                  <ThreeDModelCard
                    gltfPath={sampleModel3}
                    style={canvasStyles}
                  />
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
                gap: 5,
              }}
            >
              <Typography sx={{fontWeight:"800",fontSize:"2.5rem"}}>SOFTWARE</Typography>
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
