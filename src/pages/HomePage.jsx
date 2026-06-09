import React from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../sections/Hero.jsx";
import Highlights from "../sections/Highlights.jsx";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import Process from "../sections/Process.jsx";
import CTA from "../sections/CTA.jsx";
import Contact from "../sections/Contact.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Highlights />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <CTA />
      <Contact />
      <ScrollToTop />
    </MainLayout>
  );
}
