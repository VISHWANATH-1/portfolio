import React from "react";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

const Project = () => {
  return <div>
    <Navbar />
    <Hero2 heading="PROJECT'S" text="My Project Works" />
    <Pricing />
    <Footer />
  </div>;
};

export default Project;