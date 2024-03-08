import React, { useRef, useState } from "react";
import "./footer.css";
import sampleImage from "../../assets/lambo.jpg";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import twitter from "../../assets/footer/Social Icons.svg";
import insta from "../../assets/footer/Social Icons (1).svg";
import linkedin from "../../assets/footer/Social Icons (2).svg";
import delta from "../../assets/footer/Social Icons (3).svg";
export default function FooterPage() {
  const footerStyles = {
    image: {
      height: "100%",
      width: "100%",
      borderBottomLeftRadius: { md: "6rem", xs: 0 },
    },
    imageGrid: {
      borderBottomLeftRadius: { md: "6rem", xs: 0 },
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      elevation: 10,
    },
    inputField: {
      height: "100%",
      //   gap:"1rem"
    },
  };

  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_2mu5xtl",
    //     "template_m5udu2c",
    //     form.current,
    //     "VLwg1ltOWvnCYAiK_"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //       form.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div className="footerContainer">
      <Grid container>
        <Grid item xs={12} md={5} sx={footerStyles.imageGrid}>
          <img src={sampleImage} alt="imersive" style={footerStyles.image} />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            padding: "3rem",
            elevation: 5,
            boxShadow: 5,
            borderBottomRightRadius: "6rem",
            borderBottomLeftRadius: { xs: "6rem", md: 0 },
            bgcolor: "black",
          }}
        >
          <Grid
            container
            sx={footerStyles.inputField}
            justifyContent="space-between"
            alignItems="center"
         
          >
            <Grid xs={12} md={5} className="c-right ">
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Name"
              />
            </Grid>
            <Grid xs={12} md={5} className="c-right ">
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
              />
            </Grid>
            <Grid xs={12} md={5} className="c-right ">
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
              />
            </Grid>
            <Grid xs={12} md={5} className="c-right ">
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
              />
            </Grid>
            <Grid xs={12} md={12} className="c-right" sx={{ width: "100%" }}>
              <textarea
                name="message"
                className="user1"
                placeholder="Message"
              />
            </Grid>
            <Grid xs={12} md={12}>
              <Typography sx={{ color: "#fff" }}>
                Which solution are you most interested in?
              </Typography>
            </Grid>
            <Grid xs={12} md={12} sx={{ color: "#fff" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Virtual Stores"
                  sx={{ borderColor: "#fff" }}
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Gamified Commerce"
                />
                <FormControlLabel control={<Checkbox />} label="CGI & VFX" />
              </FormGroup>
            </Grid>
            <Grid xs={12} md={12} className="c-right" sx={{ width: "100%" }}>
              <Button color="secondary" variant="contained">
                SUBMIT
              </Button>
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5rem",
            bgcolor: "black",
          }}
        >
          <Card sx={{ height: { xs: "22rem", md: "5rem" } }}>
            <Grid container>
              <Grid xs={12} md={2} order={{ xs: 1, md: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    marginTop: "2rem",
                  }}
                >
                  <Box>
                    <img src={twitter} alt="" />
                  </Box>
                  <Box>
                    <img src={insta} alt="" />
                  </Box>
                  <Box>
                    <img src={linkedin} alt="" />
                  </Box>
                  <Box>
                    <img src={delta} alt="" />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} md={10} order={{ xs: 0, md: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                    gap: 4,
                    fontWeight: "bold",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Typography>About</Typography>
                  <Typography>Careers</Typography>{" "}
                  <Typography>Copyright notice</Typography>{" "}
                  <Typography>Privacy Policy</Typography>{" "}
                  <Typography>Terms of Use</Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
