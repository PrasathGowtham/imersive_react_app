import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import sysIcon from "../../assets/softwareicons/device.svg";

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
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "40px",
              color: "white",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Gif
          </Typography>
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
    </Grid>
  );
}
