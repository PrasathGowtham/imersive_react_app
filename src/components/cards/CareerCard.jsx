import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

const ResponsiveCardContainer = styled(Card)({
  backgroundColor: "inherit",
  border: "1px solid #8800B7",
  height: "400px",
  width: "300px",
  position: "relative",
});

const BottomContent = styled("div")({
  position: "absolute",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
  textAlign: "center",
});

export default function CareerCard({ title, content }) {
  return (
    <ResponsiveCardContainer>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#FBFBFB" }}
            textAlign={"left"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"left"}
            sx={{ color: "#676767", fontFamily: "monospace" }}
          >
            {content}
          </Typography>
        </Box>
      </CardContent>
      <BottomContent>
        <Button variant="contained" color="secondary" style={{ width: "100%" }}>
          Apply Now
        </Button>
      </BottomContent>
    </ResponsiveCardContainer>
  );
}
