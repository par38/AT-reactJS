import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios'

// import { OneLine, H1, Paragraph, H2, NotH2 } from '../Styled-components'
import { NotH2 } from '../Styled-components'
import { Button } from 'react-materialize'

import './BoProjetNouveau.css'

class BoProjetNouveau extends Component {
  state = {
    project_published: 0,
    project_order: '',
    type_of_project: '',
    picture_small: '',
    alt: '',
    city: '',
    title: '',
    text: '',
    address: '',
    date: '2018-01-01',
    surface_area: '',
    cost: ''
  }

  postProject = async (e) => {
    e.preventDefault();

    const { project_order, picture_small, alt, city, title, text, address, date, surface_area, cost } = this.state;

    axios
      .post(`http://localhost:8001/api/projets/nouveau`, {
        project_order,
        // type_of_project,
        picture_small,
        alt,
        city,
        title,
        text,
        address,
        date,
        surface_area,
        cost
      });
  };

  handleChange = (e) => {
    if (e.target.value.startsWith("https://drive.google.com/open?id=")) { e.target.value.replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?export=view&id=") }
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    this.postProject(e);
    // window.location.href = "http://localhost:8000/admin/projets";
  }

  onClick() {
    window.location.href = "http://localhost:8000/admin/projets";
  }

  render() {

    const {
      project_order,
      // type_of_project,
      picture_small,
      alt,
      city,
      title,
      text,
      address,
      date,
      surface_area,
      cost } = this.state;

    // . console.log("render this.state : ", this.state)


    return (
      <div>
        <br />
        <NotH2>Nouveau projet</NotH2>
        <br />


        <form
          onSubmit={this.handleSubmit}
          className='col s12'
          id='formElem'
        >

          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="city"
                className="validate"
                type="text"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
              <label htmlFor="city">Ville</label>
              <span className="helper-text">CHAMP OBLIGATOIRE</span>
            </div>

            <div className="input-field col s6">
              <input
                required
                id="titre"
                type="text"
                className="validate"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <label htmlFor="titre">Titre</label>
              <span className="helper-text">CHAMP OBLIGATOIRE - exemple : 12 logements</span>
            </div>
          </div>

          <div className="row">

            {/* <div className="input-field col s12">
              <select name="type_of_project" value="" onChange={this.handleChange}>
                <option name="type_of_project" value="" disabled selected>Choisir un type de construction</option>
                <option name="type_of_project" value="Bureaux">Bureaux</option>
                <option name="type_of_project" value="Logements">Logements</option>
                <option name="type_of_project" value="Commerces">Commerces</option>
                <option name="type_of_project" value="Urbanisme">Urbanisme</option>
                <option name="type_of_project" value="Equipement">Equipement</option>
                <option name="type_of_project" value="Paysage">Paysage</option>
                <option name="type_of_project" value="Musée">Musée</option>
                <option name="type_of_project" value="Ouvrage d'art">Ouvrage d'art</option>
              </select>
              <label>Type de projet</label>
              <span className="helper-text">FACULTATIF</span>
            </div> */}


            <div className="input-field col s6">
              <input
                required
                id="image_link"
                className="validate"
                type="url"
                name="picture_small"
                value={picture_small}
                onChange={this.handleChange}
              />
              <label htmlFor="image_link">Image galerie : lien google drive</label>
              <span className="helper-text">CHAMP OBLIGATOIRE - taille 881*667 - format du lien : https://drive.google.com/open?id=19Mv2hlvcd0X80CwJ8FLLTdS2EDJiOFOB</span>
            </div>

            <div className="input-field col s4">
              <input
                required
                id="alt"
                className="validate"
                type="text"
                name="alt"
                value={alt}
                onChange={this.handleChange}
              />
              <label htmlFor="alt">Texte descriptif image pour non-voyants et moteurs de recherche</label>
              <span className="helper-text">CHAMP OBLIGATOIRE</span>
            </div>

            <div className="input-field col s2">
              <input
                required
                id="project_order"
                type="number"
                name="project_order"
                value={project_order}
                onChange={this.handleChange}
              />
              <label id="label" htmlFor="ordre">Numéro d'affichage du projet</label>
              <span className="helper-text">CHAMP OBLIGATOIRE : 1 ou 2 chiffres</span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="adresse"
                type="text"
                className="validate"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
              <label htmlFor="adresse">Adresse</label>
              <span className="helper-text">FACULTATIF</span>
            </div>

            <div className="input-field col s2">
              <input
                id="date"
                type="date"
                className="validate"
                name="date"
                value={date}
                onChange={this.handleChange}
              />
              {/* <label htmlFor="date">Date</label> */}
              <span className="helper-text">CHAMP OBLIGATOIRE - Date de livraison : seulement l'année est publié</span>
            </div>

            <div className="input-field col s2">
              <input
                id="surface"
                type="text"
                className="validate"
                name="surface_area"
                value={surface_area}
                onChange={this.handleChange}
              />
              <label htmlFor="surface">Surface</label>
              <span className="helper-text">FACULTATIF - exemple format : 4.138</span>
            </div>

            <div className="input-field col s2">
              <input
                id="cost"
                type="text"
                className="validate"
                name="cost"
                value={cost}
                onChange={this.handleChange}
              />
              <label htmlFor="cost">Coût</label>
              <span className="helper-text">FACULTATIF - exemple format : 4.600.000</span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="text"
                type="text"
                className="validate"
                name="text"
                value={text}
                onChange={this.handleChange}
              />
              <label htmlFor="text">Texte</label>
              <span className="helper-text">FACULTATIF</span>
            </div>
          </div>

          <Button
            onClick={
              this.handleSubmit &&
              this.onClick}
            type="submit"
            // className="btn-meddium waves-effect waves-green"
            waves="green"
            style={{ marginRight: '5px' }}
          >
            Première phase d'enregistrement projet (pas encore publié)
              </Button>
        </form>
      </div>

    )
  }
}

export default BoProjetNouveau;