import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";

const About = () => {
  return <div>
    <Navbar />
    <Hero2 heading="About" text="I Am Front-End Developer" />
    <AboutContent />
    <Footer />
  </div>;
};

export default About;