// / test avec Simpsons
// / sans mise en page
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React from 'react'

const FrProjetsCardsM = (
  //props
  {image, quote, character}
) => {
  // const { quote, image, character } = this.props.elem
  //console.log("CardsM props = " + props)
  return (
    <div>
      <img src={image} alt={character} />
      <h3>{quote}</h3>
      <h2>{character}</h2>
    </div>
  )
}

export default FrProjetsCardsM

