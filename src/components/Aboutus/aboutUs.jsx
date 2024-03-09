import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./aboutUs.css";
import aboutus from "../../assets/lambo.jpg";
import tools from "../../assets/abotus logo/tools.svg";
import analytics from "../../assets/abotus logo/analytics.svg";
import digital from "../../assets/abotus logo/digital.svg";
import engage from "../../assets/abotus logo/engage.svg";
import loyalty from "../../assets/abotus logo/loyalty.svg";
import returns from "../../assets/abotus logo/returns.svg";
import solution from "../../assets/abotus logo/solutions.svg";

export default function AboutUs() {
  const styles = {
    immersiveImage: {
      width: "100%",
      height: "60vh",
      objectFit: "cover",
      paddingTop: 0,
    },
    brandsveImage: {
      width: "70%",
      height: "70vh",
      objectFit: "cover",
      paddingTop: 0,
    },
  };

  return (
    <div className="aboutUsContainer" id="about">
      <Grid container columnGap={2}>
        <Grid item xs={12} sx={styles.immersiveImage}>
          <img src={aboutus} alt="imersive" style={styles.immersiveImage} />
        </Grid>
        <Grid item xs={12} sx={{margin:"0 2rem"}}>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              fontWeight: "bold",
              fontSize: "4rem",
              marginTop: "4rem",
            }}
          >
            ABOUT US
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{margin:"0 2rem"}}>
          <Typography
            sx={{ textAlign: "center", padding: "0 5rem", marginTop: "4rem" }}
          >
            What's the problem: Ecommerce is Inefficient
          </Typography>
          <Typography
            sx={{ textAlign: "center", padding: "0 5rem", marginTop: "1rem" }}
          >
            Ecommerce faces inefficiencies including challenges in conveying
            brand stories, sizing uncertainty, visualization issues, and a lack
            of engagement features. Solutions require innovative approaches such
            as augmented reality for virtual try-ons and multimedia-rich product
            descriptions to enhance user experience and foster meaningful
            connections between brands and consumers.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{margin:"4rem 2rem 0 2rem"}}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "5rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                2%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                Average Customer Conversation ratio in Ecommerce
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "5rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                78%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                Average Ecommerce Cart Abandonment Rate
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "5rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                20%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#8800B7",
                  textAlign: "center",
                }}
              >
                0f all online items purchased are returned. Estimated Annual
                Cost of returns 141 Billion USD
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{margin:"0 2rem"}}>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "4rem",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Our mission
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "1rem",
            }}
          >
            To create solutions, for brands, that make Online shopping a better
            experience.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{margin:"0 2rem"}}>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "4rem",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Who we Are
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "1rem",
            }}
          >
            Imersive.io is a B2B company pioneering experiential e-commerce
            solutions for brands and retailers, empowering them to craft
            captivating 3D commerce experiences seamlessly integrated into
            established platforms and traditional 2D websites.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "1rem",
            }}
          >
            Imersive.io is a B2B company pioneering experiential e-commerce
            solutions for brands and retailers, empowering them to craft
            captivating 3D commerce experiences seamlessly integrated into
            established platforms and traditional 2D websites.  Leveraging
            cutting-edge 3D and Deeptech innovations, our offerings enhance the
            shopping journey and brand narrative. Whether it's developing 3D
            digital replicas or enhancing conversion rates, our dedicated team
            delivers comprehensive solutions, propelling brands forward into the
            digital era.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{margin:"0 2rem"}}>
          <Typography
            sx={{
              textAlign: "center",
              padding: "0 5rem",
              marginTop: "4rem",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            How we help brands
          </Typography>
        </Grid>{" "}
        <Grid container justifyContent="space-around" alignItems="center" sx={{margin:"0 2rem"}}>
          <Grid xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <img
                src={engage}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>ENGAGE CUSTOMERS</Typography>
            </Box>
          </Grid>
          <Grid xs={6} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <img
                src={analytics}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>POS & ANALYTICS</Typography>
            </Box>
          </Grid>
          <Grid xs={6} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <img
                src={returns}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>REDUCE RETURNS</Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <img
                src={loyalty}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>BRAND LOYALTY</Typography>
            </Box>
          </Grid>
          <Grid xs={6} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem",
              }}
            >
              <img
                src={digital}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>INCRERASE DIGITAL SALES</Typography>
            </Box>
          </Grid>
          <Grid xs={6} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={tools}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>EMERGING TECH TOOLKITS</Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={solution}
                alt="imersive"
                style={{ height: "4rem", width: "4rem", marginBottom: "1rem" }}
              />
              <Typography>DEVICE AGNOSTIC SOLUTIONS</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ margin: "2rem 0 4rem 0" }}>
          <Button
            color="secondary"
            variant="contained"
            // sx={{width:"2rem"}}
          >
            CHECK NOW
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
