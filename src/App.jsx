import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </>;
}

export default App;
