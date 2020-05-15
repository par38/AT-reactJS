// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React, { Component } from 'react';
import axios from 'axios';

import BoProjetsM from './BoProjetsCardsM';
import { NotH2 } from '../Styled-components'
import { Button } from 'react-materialize';
// import { Button, Icon } from 'react-materialize';
import './BoProjets.css'

class BoProjetsCardsAxios extends Component {
  state = {
    projectsData: []
  };

  componentDidMount() {
    this.getProjectsData();
  }

  // / récup des données brutes, sous forme de tableau d'objets
  getProjectsData = async () => {
    const response = await axios.get('http://localhost:8001/api/projets')
    // / MàJ du state initial, via le setState
    this.setState({
      projectsData: response.data
    });
    // . console.log(this.setState)
  };

  onClick() {
    window.location.href = "http://localhost:8000/admin/projets/nouveau";
  }

  render() {
    // . console.log('this.state.projectsData : ' + this.state.projectsData);

    // / déconstruction du state et alias du this.state
    const { projectsData } = this.state;
    // . console.log("render projectsData : ",projectsData)

    // + PROJECTS project_id, project_published, project_order, type_of_project, city, title, text, address, date, surface_area, cost
    // + CLIENTS client_name, 
    // + PARTNERS partner_name, 
    // + MEDIA alt, description, main, picture_large, media_order, media_published
    // + CREDITS credit 
    // + WHERE p.project_id = ?
    // + ORDER BY m.media_order

    return (
      <div>
        <div className="container">
          <div className="row">
            <br />
            <NotH2>LISTE PROJETS - publiés ou pas</NotH2>
            <Button floating
              medium
              className="red"
              waves="light"
              // icon={<Icon />}
              tooltip="Ajouter un projet"
              tooltipOptions={{ position: 'right' }}
              onClick={
                this.onClick}
            >
              +
            </Button>
            <br />
            {projectsData
              .map((elem) => <BoProjetsM {...elem} key={elem.project_id} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoProjetsCardsAxios;
