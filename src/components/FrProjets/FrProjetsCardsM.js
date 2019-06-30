// / fonction

// / http://localhost:8000/projets
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React from 'react'
import { NavLink } from 'react-router-dom'

import './FrProjetsCardsM.css'


// const regexId = /[\s\\.,:;?!\-_€$<>]/gi;

const FrProjetsCardsM = (
  // / props
  { alt, picture_small, project_id, city, title }
) => {

  // ? transforme title + id en /kebab-case/numeroId
  // / identifie les caractères spéciaux du title, 
  // / afin de le remplacer par des tirets
  // const regexId = /[\s\\.,:;?!_€$<>]/gi;
  // const projectLink = title.toLowerCase().replace(regexId, "-").concat("/", project_id)
  // . console.log("projectLink : ", projectLink)

  // / projectId = simple project id
  const projectId = project_id
  // . console.log("projectId : " + projectId)

  return (
    <div className="col s6 m6 l6" id="no-border">

      {/* // ? details/title-kebab-case/3 */}
      {/* // / details/1 */}
      <NavLink to={`/details/${projectId}`}>
        {/* <NavLink to={`/details/${projectLink}`}> */}

        <div className="card">
          <div className="card-image hoverable">
            <img
              className="responsive-img"
              id="imgAT"
              src={picture_small}
              alt={alt}

              // *très important : permet la responsivité de l'image
              height="200"

            />
          </div>
          <div className="card-content" id="card-content-at">
            <p>{city} - {title}</p>
            <p>{title}</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default FrProjetsCardsM

