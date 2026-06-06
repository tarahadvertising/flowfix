import React from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../sections/Hero.jsx";
import Trust from "../sections/Trust.jsx";
import Highlights from "../sections/Highlights.jsx";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import Process from "../sections/Process.jsx";
import Industries from "../sections/Industries.jsx";
import Projects from "../sections/Projects.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import CTA from "../sections/CTA.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Trust />
      <Highlights />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <Industries />
      <Projects />
      <Testimonials />
      <CTA />
      <ScrollToTop />
    </MainLayout>
  );
}
