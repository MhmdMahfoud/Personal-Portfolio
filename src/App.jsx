import React, { useState } from "react";
import Navba from "./UI/Navba";
import MobileMenu from "./UI/MobileMenu";
import LoadingScreenAnimation from "./UI/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./UI/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import RevealOnScroll from "./UI/RevealOnScroll";
import { Contact } from "./sections/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}

      <Navba isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
      <Home />
      <AnimationWaves />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
   
    </>
  );
}

export default App;
