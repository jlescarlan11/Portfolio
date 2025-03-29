import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import profilePic from "./assets/about-me-pic.jpg";
import EducationSection from "./components/Education";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About photoUrl={profilePic} />
      <EducationSection />
      <Portfolio />
    </>
  );
};

export default App;
