import React from "react";
import "./home.css";
import imersiveVideo from "../../assets/video/Store_Trailer_V2.mp4"

function HomeScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homeContainer" id="home">
      <div style={{ width: "100vw", height: "100%", overflow: "hidden" }}>
        <video
          src={imersiveVideo}
          autoPlay
          loop
          muted  // Added muted attribute
     
          style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:"1rem" }}
        />
      </div>
      <div className="buttonContainer">
        
        <div className="buttonHome">
          <span className="buttonContainerSpan"></span>
          <a href="#">GET STARTED</a>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
