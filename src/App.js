import "./App.css";
import ParallaxSmooth from "./components/ParallaxSmooth";
import NavBar from "./components/Home";
import HomeScreen from "./components/Home/home";
import ProjectList from "./components/ProjectsList/projectList";
import SoftwareContent from "./components/Software/software";
import WhatIsImersive from "./components/whatIsImersive/imersive";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <WhatIsImersive/>
      <ProjectList />
      <SoftwareContent />

      {/* final out put  */}
      <ParallaxSmooth />
    </div>
  );
}

export default App;
