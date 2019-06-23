
// / avec cards Materialize-css
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React from 'react'
// import FrMenu from '../components/FrMenu/FrMenu'

import FrHeader from '../components/FrHeader/FrHeader'
import FrProjetsCardsAxios from '../components/FrProjets/FrProjetsCardsAxios'

const PageFrProjets = () => {
  return (
    <div>
      <FrHeader />
      {/* <FrMenu /> */}
      <FrProjetsCardsAxios />

    </div>
  )
}

export default PageFrProjets