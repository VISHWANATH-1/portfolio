import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";

const Contact = () => {
  return <div>
    <Navbar />
    <Hero2 heading="CONTACT" text="Let's Have A Chat" />
    <Form />
    <Footer />
  </div>;
};

export default Contact;