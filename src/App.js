import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
import NavBar from "./components/navBar";
import HomeScreen from "./components/Home/home";
import ProjectList from "./components/ProjectsList/projectList";
import SoftwareContent from "./components/Software/software";
import WhatIsImersive from "./components/whatIsImersive/imersive";
import AboutUs from "./components/Aboutus/aboutUs";
import TextTransitions from "./components/Software/TextTransitions";
import FooterPage from "./components/Footer/footer";
import ParallaxDivs from "./components/ParallaxDivs";
import Careers from "./components/careers/Careers";
import Blog from "./components/blog/Blog";
import QuantumEn from "./components/NewSoftwareComponent/QuantumEn";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/software" element={<QuantumEn />} />
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <HomeScreen />
                  <WhatIsImersive />
                  <SoftwareContent />
                  <TextTransitions />
                  <ProjectList />
                  <AboutUs />
                  {/* <Blog /> */}
                  <Careers />
                  <FooterPage />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
