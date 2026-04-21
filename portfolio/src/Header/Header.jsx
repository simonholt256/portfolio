import NavBar from "./NavBar"

function Header() {
  return (
    <div className='Header'>
        <div className='Header__blue-bar'></div>
        <div className='Header__grid-split'>
          <div className='Header__grid-split-left'>
            <div className='Header__grid-split-left__top'>
              <div className='Header__grid-split-left__top-tab'>
                <div className='Header__grid-split-left__top-white'></div>
              </div>
            </div>
            <div className='Header__grid-split-left__bottom'>
              <div className='Header__grid-split-left__bottom-white'></div>
            </div>
          </div>
          <div className='Header__grid-split-right'>
            <div className='Header__grid-split-right-white'>
              <NavBar/>
            </div>
          </div>
        </div>
      </div>
  )
    

}

export default Header