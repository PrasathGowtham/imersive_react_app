import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import sysIcon from "../../assets/softwareicons/device.svg";
import webIcon from "../../assets/softwareicons/web.svg";
import userExp from "../../assets/softwareicons/userexp.svg";
import augR from "../../assets/softwareicons/augr.svg";
import vrLogo from "../../assets/softwareicons/vr.svg";
import xrStore from "../../assets/softwareicons/xrStore.svg";
import engagement from "../../assets/softwareicons/engagement.svg";
import aiLogo from "../../assets/softwareicons/aiLogo.svg";
import shopyInt from "../../assets/softwareicons/shopInt.svg";
import vrImg from "../../assets/pictures/vr_img.jpg";
import bubble from "../../assets/pictures/bubble.jpg";
import sofa from "../../assets/pictures/sofa.jpg";

import maniq from "../../assets/pictures/maniquine.jpg";
import realityVr from "../../assets/pictures/reality_vr.jpg";
import wmaniq from "../../assets/pictures/women_maniquine.jpg";
import vibe from "../../assets/pictures/vibe.jpg";
import newGenVr from "../../assets/pictures/newGenVr.jpg";
import pearls_d from "../../assets/pictures/3d_perls.jpg";

export default function XrStore() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            height: "403px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Typography
            sx={{ fontFamily: "inherit", fontSize: "25px", fontWeight: 700 }}
          >
            3D XR STORE
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              width: { xs: "100%", sm: "100%", md: "40%", xl: "40" },
              fontSize: "12px",
            }}
          >
            Are you ready for 3D Commerce? “Build your own 3D Virtual Store that
            works on any device and plugs into your website”
          </Typography>
          <Box>
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              sx={{ fontFamily: "inherit" }}
            >
              3D XR Store Button
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={vrImg} alt="VR Image" width={"100%"} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={sysIcon}
                alt="Devices"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Device Agnostic
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Works on any Device! Our 3D XR store is built to work on any
              device from a smartphone, desktop, to a VR headset!
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* ---two--- */}

      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={webIcon}
                alt="web services"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Web Based
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              No Customer friction! Our 3D stores are easily accessible through
              a web browser. Your users don't need to download additional
              software or apps to use it
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={bubble} alt="3D_Store" width={"100%"} />
        </Box>
      </Grid>
      {/* ----three-- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={sofa} alt="User experience" width={"100%"} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={userExp}
                alt="Devices"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                User Experience
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Like in a physical store, your user will have the ability to walk,
              interact and shop inside the store. Choose from multiple
              navigation options that onboard all groups to experience your
              virtual store.
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* ----Four--- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={augR}
                alt="web services"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Augmented Reality{" "}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Upgrade your product visualization by using our integrated AR
              display. End users can now visualize your products in the comfort
              of their home. For more information on how AR can help your
              business check out our blog!
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={maniq} alt="personal size recommendation" width={"100%"} />
        </Box>
      </Grid>
      {/* ----Five---- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={realityVr}
            alt="personal size recommendation"
            width={"100%"}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={vrLogo}
                alt="web services"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                VR and mixed reality compatible
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "35%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Create truly imersive experiences without the need of custom app
              or downloads. Our 3D stores are VR compatible natively and can
              give a truly imersive shopping experience with a click of a
              button.
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* -----seven----- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={xrStore}
                alt="Devices"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Custom 3d XR Stores
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "40%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Not on shopify or have a custom website, no worries our team can
              custom build you a 3D Commerce experience.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={wmaniq} alt="personal size recommendation" width={"100%"} />
        </Box>
      </Grid>

      {/* -----Eight----- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={vibe} alt="personal size recommendation" width={"100%"} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={engagement}
                alt="web services"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Engagement
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Add mini games and gamified educational elements to improve brand
              awareness that increase engagement!
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* ----Nine--- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={aiLogo}
                alt="Devices"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                AI Integrations
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "45%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Want to reduce your online return rates and increase customer
              satisfaction? At Imersive we are using cutting edge AI tools to
              solve problems like Sizing and 3D Personalized visualization. To
              learn more check out Fit.AR and Fit.AI.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={newGenVr}
            alt="personal size recommendation"
            width={"100%"}
          />
        </Box>
      </Grid>

      {/* -----Ten--- */}
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <img
            src={pearls_d}
            alt="personal size recommendation"
            width={"100%"}
            height={"350px"}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={shopyInt}
                alt="web services"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Our Shopify Integration
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "40%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Enable 3d Commerce directly on top of your Shopify! Download our
              3d XR store app on shopify and sync your 2d product catalog with
              3d digital twins. By doing so allow your customers to directly
              shop in your 3d XR Store leveraging your existing checkout
              process. Our Admin panel allows you to monitor the store's
              performance and manage your 3d assets seamlessly. For more
              information Check out our Shopify App.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
