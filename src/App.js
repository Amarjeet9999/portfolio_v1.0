/** @format */

import "./App.css";
import React from "react";
import { SideBar } from "./Components/SideBar/Sidebar";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Services } from "./Components/Services/Services";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Contact } from "./Components/Contact/Contact";
import { Created } from "./Components/Created";
import { Theme } from "./Components/Theme";

function App() {
  return (
    <>
      <Theme />
      <SideBar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Created />
    </>
  );
}

export default App;
