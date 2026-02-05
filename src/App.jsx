import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer.jsx";
import ScrollProgressBar from "./ScrollProgressBar.jsx";
import CercleRotate from "./components/CercleRotate.jsx";
import DownloadCVButton from "./components/DownloadCVButton.jsx";

import Gallery from "./components/Gallery.jsx";

// const Works = lazy(() => import("./components/Works.jsx"));
const App = () => {
  return (
    <>
      <BrowserRouter>
  <Routes>
    
    <Route
      path="/"
      element={
        <div id="acceuil" className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <ScrollProgressBar />
            <Navbar />
            <Hero />
            <div className="flex justify-center items-center">
              <DownloadCVButton />
            </div>
          </div>

          <About />
          <Experience />
          <CercleRotate />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
        </div>
      }
    />

    <Route path="/infographie" element={<Gallery />} />

  </Routes>
</BrowserRouter>

    </>
  );
};

export default App;
