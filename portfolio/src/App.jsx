import { useState } from 'react'

import ChromeBox from './assets/chromeboxfargreengimp.png'
import Header from './Header/Header'

import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='tech-divider'></div>
      <div className='chrome-box-outer'>
        <div className='chrome-box-inner'></div>
      </div>
      <div className='orange-divider'></div>
      {/* <img className='chrome-box' src={ChromeBox}/> */}
    </>
  )
}

export default App
