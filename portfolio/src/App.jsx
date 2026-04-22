import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import Work from './Pages/Work'
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Spring from "./Pages/ProjectPages/Spring";
import GrecianDB from "./Pages/ProjectPages/GrecianDB"
import SceneIt from "./Pages/ProjectPages/SceneIt"
import EatTheFrog from "./Pages/ProjectPages/EatTheFrog"
import Principles from "./Pages/ProjectPages/Principles"

import ChromeBox from './assets/chromeboxfargreengimp.png'
import Header from './Header/Header'
import Footer from "./components/Footer";

import './App.css'

function App() {

  return (
    <>
      
      <Router>
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
      </Router>
      {/* <img className='chrome-box' src={ChromeBox}/> */}
    </>
  )
}

export default App
