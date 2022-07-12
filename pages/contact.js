import React from "react";
import ContactForm from "../components/ContactForm";
import { Hero } from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero  heading='Contact' message='Submit the form below for more work and quotes.'/>
      <ContactForm/>
    </div>
  );
};

export default contact