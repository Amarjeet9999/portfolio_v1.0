/** @format */

import "./App.css";
import React from "react";
import { SideBar } from "./Components/SideBar/Sidebar";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Created } from "./Components/Created";
import { Theme } from "./Components/Theme";
import Particles from "./Components/Particle";
import { Party } from "./Components/Home/Home";

function App() {
  return (
    <>
      <Party className='particle-con'>
        <Particles />
      </Party>
      <Theme />
      <SideBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Created />
    </>
  );
}

export default App;
