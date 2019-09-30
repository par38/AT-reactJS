import React, { Component } from 'react';
import axios from 'axios'

import { OneLine, H1, Paragraph, H2, NotH2 } from '../Styled-components'

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
    // . console.log("render mainPicture : ", mainPicture)

    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <div>
          {/* // / IMAGE PRINCIPALE ET CREDIT */}
          <div className="parallaxDiv" >

            <div className="parallaxImg" style={{
              backgroundImage: `url(${mainPicture[0].picture_large})`
            }} >
              {/* /// !! IF EXISTS */}
              {!!mainPicture[0].credit
                ? < div > <p id="credit-parallax">&copy; {mainPicture[0].credit}</p> </div>
                : ''
              }
            </div>

          </div>

          {/* // / TEXTES  */}
          <div className="section white">
            <div className="row container">
              <OneLine>
                <H1 className="header">{projectDetails[0].city} - {projectDetails[0].title}</H1>
              </OneLine>

              {!!projectDetails[0].address
                ? <OneLine> <Paragraph>Adresse:</Paragraph><p>    </p> <H2>{projectDetails[0].address}</H2> </OneLine>
                : ''
              }

              <OneLine>
                <Paragraph>Date: </Paragraph>
                <NotH2>{projectDetails[0].date.match(anneeRegex)}</NotH2>
              </OneLine>
              <OneLine>
                <Paragraph>Maîtrise d'ouvrage: </Paragraph>
                <H2>{projectDetails[0].client_name}</H2>
              </OneLine>
              <OneLine>
                <Paragraph>Surface: </Paragraph>
                <NotH2>{projectDetails[0].surface_area} m² HON</NotH2>
              </OneLine>
              <OneLine>
                <Paragraph className="grey-text text-darken-3 lighten-3">Coût: </Paragraph>
                <NotH2>{projectDetails[0].cost} € HT</NotH2>
              </OneLine>

              {!!projectDetails[0].partner_name
                ? <OneLine> <Paragraph>Partenaires: </Paragraph> <H2>{projectDetails[0].partner_name}</H2> </OneLine>
                : ''
              }

              {!!projectDetails[0].text
                ? <OneLine> <H2>{projectDetails[0].text}</H2> </OneLine>
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
                {!!photo.credit
                  ? < div > <p id="credit-others">&copy; {photo.credit}</p> </div>
                  : ''
                }
              </div>
            ))}
        </div>
      </>
    )
  }
}


export default FrProjetDetails;