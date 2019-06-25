import React, { Component } from 'react';
import axios from 'axios'

import './FrProjetDetails.css'

class FrProjetDetails extends Component {
  state = {
    projectDetails: [],
    isLoading: true
  }

  componentDidMount() {
    this.getProjectDetails();
  }

  getProjectDetails = async () => {

    // / URL *************************************
    const parsedUrl = new URL(window.location.href);
    // . console.log("parsedUrl : ", parsedUrl)

    // / :id *************************************
    const idRegex = /\d+$/
    const projectNumber = parsedUrl.href.match(idRegex)
    //  .console.log("id :", projectNumber);
    // const projectNumber = parsedUrl.href.match(idRegex)
    // console.log("id :", projectNumber);

    const response = await axios.get(`http://localhost:8001/api/details/${projectNumber}`);
    this.setState({ projectDetails: response.data, isLoading: false });
    //  .console.log("response.data :", response.data[1])
  };

  render() {
    // . console.log("render : ",this.state.isLoading)
    // . console.log("render this.state.projectDetails : ", this.state.projectDetails)


    // / destructuration : plusieurs photos, il faut map
    const { projectDetails, isLoading } = this.state;

    // * GET : id, city, title, text, adress, date, surface_area, cost, client_name, profile_picture
    // * partner_name, media_order, picture_large, alt, description, credit

    // + PROJECTS project_id, project_published, project_order, type_of_project, city, title, text, address, date, surface_area, cost
    // + CLIENTS client_name, 
    // + PARTNERS partner_name, 
    // + MEDIA alt, description, main, picture_large, media_order, media_published, 
    // + CREDITS credit 
    // + ORDER BY m.media_order
    // . console.log("render projectDetails[1]: ", (projectDetails[1]))
    // . console.log("render projectDetails: ", (projectDetails))

    // / regex sélectionnant seulement les 4 premières chiffre = année
    const anneeRegex = /\d{4}/

    // / object contenant la photo principale
    const mainPicture = projectDetails.filter(main => main.main === 1)
    // .console.log("render mainPicture : ", mainPicture)

    return (
      <>
        {isLoading ?
          <div>Loading...</div> :

          (

            <div>

              <div className="parallaxDiv" >

                <div className="parallaxImg" style={{
                  backgroundImage: `url(${mainPicture[0].picture_large})`
                }} >
                  <div id="divCredit">
                    <p id="credit">&copy; {mainPicture[0].credit}</p>
                  </div>
                </div>
                }
              </div>


              {/* // / TEXTES  */}
              <div className="section white">
                <div className="row container">
                  <h1 className="header">{projectDetails[0].city} - {projectDetails[0].title}</h1>

                  {!!projectDetails[0].address
                    ? <p>Adresse : {projectDetails[0].address}</p>
                    : ''
                  }

                  <p>Date : {projectDetails[0].date.match(anneeRegex)}</p>
                  <p>Maîtrise d'ouvrage : {projectDetails[0].client_name}</p>
                  <p>Surface : {projectDetails[0].surface_area} m²</p>
                  <p className="grey-text text-darken-3 lighten-3">Coût : {projectDetails[0].cost} €</p>


                  {!!projectDetails[0].partner_name
                    ? <p>Partenaires : {projectDetails[0].partner_name}</p>
                    : ''
                  }

                </div>
              </div>

              {/* // / PHOTOS */}
              {projectDetails
                .filter(photo => photo.main !== 1)
                .filter(photo => photo.media_published === 1)
                .map(photo => (
                  <div key={photo.media_order} className="containerImg">
                    <img
                      src={photo.picture_large}
                      alt={photo.alt}
                      className="responsive-img"
                    />
                    <div>
                      <p id="credit">&copy; {photo.credit}</p>
                    </div>
                  </div>
                ))}
            </div>
          )
        }
      </>
    )
  }
}

export default FrProjetDetails;