import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
