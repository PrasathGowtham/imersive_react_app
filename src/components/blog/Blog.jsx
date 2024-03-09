import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import blogImg from "../../assets/pictures/blog_1.jpg";
import blogSubOne from "../../assets/pictures/blogSubOne.jpg";
import blogSubTwo from "../../assets/pictures/blogSubTwo.jpg";
import blogSubThree from "../../assets/pictures/blogSubThree.jpg";

export default function Blog() {
  const imgHxW = {
    height: "150px",
    width: "250px",
  };
  return (
    <Box sx={{ height: "auto" }} id="blog">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        pl={2}
        pr={2}
      >
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <Box pt={2}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "50px", sm: "70px", md: "150px" },
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              THE BLOG
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10}  md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <img src={blogImg} width={"100%"} height={"400px"} alt="blog" />

            <Typography sx={{ color: "#C6C6C6", textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              finibus ultrices libero, eu auctor ex eleifend a. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
            </Typography>

            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginTop: "1px" }}
            >
              READ MORE
            </Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",

              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <img src={blogSubOne} alt="Image" style={imgHxW} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 5,
                }}
              >
                <Typography sx={{ color: "#C6C6C6", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam finibus ultrices libero, eu auctor eleifend . Interdum
                  fames ac ante ipsum primis in faucibus.
                </Typography>
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <img src={blogSubTwo} style={imgHxW} alt="Image" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 5,
                }}
              >
                <Typography sx={{ color: "#C6C6C6", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam finibus ultrices libero, eu auctor eleifend . Interdum
                  fames ac ante ipsum primis in faucibus.
                </Typography>
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <img src={blogSubThree} style={imgHxW} alt="Image" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 5,
                }}
              >
                <Typography sx={{ color: "#C6C6C6", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam finibus ultrices libero, eu auctor eleifend . Interdum
                  fames ac ante ipsum primis in faucibus.
                </Typography>
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ height: "30px" }}></Box>
    </Box>
  );
}
