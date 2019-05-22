// / test avec Simpsons
// / sans mise en page
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React from 'react'

import './FrProjetsCardsM.css'

const FrProjetsCardsM = (
   // /props
  {image, quote, character}
) => {
  // const { quote, image, character } = this.props.elem
  //console.log("CardsM props = " + props)
  return (
    <div className="col s6 m6 l6">
      <div className="card">
        <div className="card-image hoverable">
          <img
            className="responsive-img"
            src={image}
            alt={character}

            // *très important : permet la responsivité de l'image
            height="200"
            />
        </div>
        <div className="card-content" id="card-content-at">
            <p>{character}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default FrProjetsCardsM

