import React from "react";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Work from "../components/Work";

const Project = () => {
  return <div>
    <Navbar />
    <Hero2 heading="PROJECT'S" text="My Project Works" />
    <Work />
    <Pricing />
    <Footer />
  </div>;
};

export default Project;