
// / test avec Simpsons
// / sans mise en page
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / + FrProjetsCardsM(fonction)

import React from 'react'

// + import FrHeader from '../components/FrHeader'
import FrProjetsCardsAxios from '../components/FrProjets/FrProjetsCardsAxios'

const PageFrProjets = () => {
  return (
    <div>
      {/* // +<FrHeader /> */}
      <FrProjetsCardsAxios />
    
    </div>
  )
}

export default PageFrProjets