import "./App.css";
import ParallaxSmooth from "./components/ParallaxSmooth";
import NavBar from "./components/Home";
import HomeScreen from "./components/Home/home";
import ProjectList from "./components/ProjectsList/projectList";
import SoftwareContent from "./components/Software/software";
import WhatIsImersive from "./components/whatIsImersive/imersive";
import AboutUs from "./components/Aboutus/aboutUs";
import TextTransitions from "./components/Software/TextTransitions";
import FooterPage from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <WhatIsImersive />
      <SoftwareContent />
      <TextTransitions/>
      <ProjectList />
      <AboutUs />
      <FooterPage/>

      {/* final out put  */}
      {/* <ParallaxSmooth /> */}
    </div>
  );
}

export default App;
