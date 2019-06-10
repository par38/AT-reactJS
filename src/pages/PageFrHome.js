import React from 'react'

import FrMenu from '../components/FrMenu/FrMenu'
import FrHome from '../components/FrHome/FrHome'
// /after create FrHeader and FrBurger : uncomment
// +import FrHeader from '../components/FrHeader/FrHeader'

import './PageFrHomeGrids.css';

const PageFrHome = () => {
  return (
    <div>
        <FrMenu />
        <FrHome />
    {/* <div className="grid-container">
      
      >>>>>> voir si on peut imbriquer header en main !! <<<<<<<<<
      <main className="grid-item">
        <header className="grid-item">
          <FrHeader />
        </header>
      </main>
      
      </div> */}
    </div>
  )
}

export default PageFrHome