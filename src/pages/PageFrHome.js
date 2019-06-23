import React from 'react'

import FrHeader from '../components/FrHeader/FrHeader'
import FrHome from '../components/FrHome/FrHome'

import './PageFrHomeGrids.css';

const PageFrHome = () => {
  return (
    <div>
      <FrHeader />
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