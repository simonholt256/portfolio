import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/toppages/home";
import Work from "./pages/toppages/work";
import About from "./pages/toppages/about";
import Contact from "./pages/toppages/contact";

import Spring from "./pages/projectpages/spring";
import GrecianDB from "./pages/projectpages/greciandb";
import SceneIt from "./pages/projectpages/sceneIt";
import EatTheFrog from "./pages/projectpages/eatthefrog";
import Principles from "./pages/projectpages/principles";

import Header from "./components/header";
import Footer from "./components/footer";

import "./css/app.css"
import "./css/pages.css"

function App() {

  return (
    <>
      
      <Router  basename="/portfolio">
        <div className="whole-page">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/spring" element={<Spring />} />
            <Route path="/work/greciandb" element={<GrecianDB />} />
            <Route path="/work/sceneit" element={<SceneIt />} />
            <Route path="/work/eatthefrog" element={<EatTheFrog />} />
            <Route path="/work/principles" element={<Principles />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
      {/* <img className='chrome-box' src={ChromeBox}/> */}
    </>
  )
}

export default App
