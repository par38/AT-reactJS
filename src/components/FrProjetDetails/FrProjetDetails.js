import React, { Component } from 'react';
import axios from 'axios'


// import M from 'materialize-css'

// import './FrProjetDetails.css'

class FrProjetDetails extends Component {
  state = {
    projectDetails: [],
    isLoading: true
  }
  
  componentDidMount() {
    this.getProjectDetails();

    //   // $('.parallax').parallax();
    //   // const elems = document.querySelectorAll('.parallax');
    //   // M.Parallax.init(
    //   //    this.parallax
    //   //     elems
    //   // );
    //   // M.AutoInit()
    //   // M.Parallax.init()
  }
    
  getProjectDetails = async () => {
    // / *****************************************************************************
    // / URL
    // / *****************************************************************************
    const parsedUrl = new URL(window.location.href);
    console.log("parsedUrl : ", parsedUrl)

    // / *****************************************************************************
    // / :id
    // / *****************************************************************************
    const idRegex = /\d+$/
    const projectNumber = parsedUrl.href.match(idRegex)
    console.log("id :", projectNumber);
    // const projectNumber = parsedUrl.href.match(idRegex)
    // console.log("id :", projectNumber);

    const response = await axios.get(`http://localhost:8001/api/details/${projectNumber}`);
    this.setState({ projectDetails: response.data, isLoading: false });
    //  .console.log("response.data :", response.data[1])
  };

  render() {
    // .console.log("render : ",this.state.isLoading)
    console.log("render this.state.projectDetails : ", this.state.projectDetails)
    
    // / *****************************************************************************
    // / destructuration : plusieurs photos, il faut map
    // / *****************************************************************************
    const { projectDetails, isLoading } = this.state;
    // * *****************************************************************************
    // * GET : id, city, title, text, adress, date, surface_area, cost, client_name, 
    // * partner_name, media_order, picture_large, alt, description, credit
    // * *****************************************************************************
    // .console.log("render projectDetails[1]: ", (projectDetails[1]))
    console.log("render projectDetails: ", (projectDetails))

    // / *****************************************************************************
    // / regex sélectionnant seulement les 4 premières chiffre = année
    // / *****************************************************************************
    const anneeRegex = /\d{4}/

    // / *****************************************************************************
    // / object contenant la photo principale
    // / *****************************************************************************
    const mainPicture = projectDetails.filter(main => main.main === 1)
    // .console.log("render mainPicture : ", mainPicture)

    return (
      <>
        {isLoading ?
          <div>Loading...</div> :
  
          (
        
            <div>

              {/* // ? ******************* TODO PARALLAX image principale ********************************/}
              <div>
                <img
                  className="image-main 
                  // responsive-img
                  "
                  src={mainPicture[0].picture_large}
                  alt={mainPicture[0].alt}
                  key={mainPicture.media_order}

                  // *très important : permet la responsivité de l'image
                  // height="800"
                />
                <p>{mainPicture.credit}</p>
              </div>


              {/* // / TEXTES  */}
              <div className="section white">
                <div className="row container">
                  <h2 className="header">{projectDetails[0].city} - {projectDetails[0].title}</h2>

                  {!!projectDetails[0].address
                    ? <p className="grey-text text-darken-3 lighten-3">Adresse : {projectDetails[0].address}</p>
                    : ''
                  }
    
                  <p className="grey-text text-darken-3 lighten-3">Date : {projectDetails[0].date.match(anneeRegex)}</p>
                  <p className="grey-text text-darken-3 lighten-3">Maîtrise d'ouvrage : {projectDetails[0].client_name}</p>
                  <p className="grey-text text-darken-3 lighten-3">Surface : {projectDetails[0].surface_area} m²</p>
                  <p className="grey-text text-darken-3 lighten-3">Coût : {projectDetails[0].cost} €</p>

                  
                  {!!projectDetails[0].partner_name
                    ? <p className="grey-text text-darken-3 lighten-3">Partenaires : {projectDetails[0].partner_name}</p>
                    : ''
                  }

                </div>
              </div>

              {/* // / PHOTOS */}
              {projectDetails
                .filter(photo =>
                  photo.main !== 1)
                .filter(photo => photo.media_published === 1)
                .map(photo => (
                  <div key={photo.media_order}>
                    <img
                      src={photo.picture_large}
                      alt={photo.alt}
                      className="responsive-img"
                    />
                    <p>{photo.credit}</p>
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