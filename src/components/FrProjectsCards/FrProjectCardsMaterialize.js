
// / test avec API simpson
// / sans mise en page

import React, { Component } from 'react';
import axios from 'axios';

// + import M from 'materialize-css';

class FrProjectCardsMaterialize extends Component {
  state = {
    projectsData: [
      {
        quote: "Doughnuts? I told you I don't like ethnic food",
        character:	"Mr. Burns",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
        characterDirection: "Right"
      }
    ]
  }

  componentDidMount() {
    this.getProjectsData();
  }

  getProjectsData = async () => {
    // / récup des données brutes, sous forme de tableau d'objets
    const response = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?")
      // .then(reponse => reponse.data)
      // .then((data) => {
        // / MàJ du state initial, via le setState
        this.setState({
          projectsData: response.data[0]
        })
        console.log(this.setState)
      // })
  }
  
  render() {
    console.log(this.state.projectsData)

    // / déconstruction du state et alias du this.state
    const { projectsData } = this.state;
    return (
      <div>
        {projectsData.quote}
        <img src={projectsData.image} alt={projectsData.character} />
      </div>
    )
  }
}

export default FrProjectCardsMaterialize