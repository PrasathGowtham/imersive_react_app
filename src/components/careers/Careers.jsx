import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CareerCard from "../cards/CareerCard";

export default function Careers() {
  const cardData = [
    {
      title: "Back End Developer",
      content:
        "Looking for a talented Back-End Developer to architect and implement robust server-side solutions, powering seamless digital experiences.",
    },
    {
      title: "Three.JS Developer",
      content:
        "Experienced Three.js Developer to create stunning 3D web experiences, bringing imagination to life through cutting-edge technology.",
    },
    {
      title: "3D Artist",
      content:
        "Seeking skilled 3D Artist to craft captivating visual experiences, transforming concepts into stunning digital realities.",
    },
  ];

  return (
    <Box sx={{ height:"auto" ,margin:"3rem 0"}} id="careear">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography sx={{ fontSize: "2rem", color: "white" }}>
          Careers
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "white", width: "50%" }}>
          "At Imersive, we're forging a path of innovation, where every voice
          matters and creativity thrives. Join our vibrant community and unleash
          your potential in a supportive environment. Explore exciting
          opportunities and be part of redefining what's possible with us."
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          marginTop: "40px",
          gap: 4,
        }}
      >
        {cardData.map((obj, idx) => {
          return (
            <CareerCard key={idx} title={obj.title} content={obj.content} />
          );
        })}
      </Box>
      <Box mt={4}>
        <Button variant="outlined" size="large" color="secondary">
          See more opening
        </Button>
      </Box>
    </Box>
  );
}
