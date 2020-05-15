// / fonction

// / http://localhost:8000/projets
// / PageBoProjets
// / BoProjetsCardsAxios (class)
// / BoProjetsCardsM (fonction)

import React from 'react'
import { NavLink } from 'react-router-dom'

import { H2, Paragraph } from '../Styled-components'
// import { H2, Paragraph, NotH2 } from '../Styled-components'


import './BoProjets.css'

// const regexId = /[\s\\.,:;?!\-_€$<>]/gi;

const BoProjetsCardsM = (
  // / props
  { project_id, city, title, project_published, picture_small, alt, project_order }
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

  const grey = {
    opacity: 0.3
  }

  return (
    <div class="col s12 m6">

      <NavLink to={`/admin/projets/modif/${projectId}`}>
        <div className="card horizontal">
          <div className="card-image">
            {project_published ? <img src={picture_small}
              alt={alt} /> : <img src={picture_small}
                alt={alt} style={grey} />}
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <H2 className="header">{city}</H2>
              <H2>{title}</H2>
              <Paragraph>Ordre d'affichage : {project_order}</Paragraph>
              {project_published ? <Paragraph>Projet visible : oui</Paragraph> : <Paragraph>Projet visible : non</Paragraph>}

              <form action="#">

                <p>
                  <label>
                    <input type="checkbox" checked="checked" />
                    <span>Yellow</span>
                  </label>
                </p>

              </form>

            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default BoProjetsCardsM
