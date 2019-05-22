// / test avec API simpson
// / sans mise en page
// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / + FrProjetsCardsM(fonction)

import React, { Component } from 'react';
import axios from 'axios';

import FrProjetsCardsM from './FrProjetsCardsM';
//import FrProjectCardsGrid from './FrProjectCardsGrid'

// + import M from 'materialize-css';

class FrProjetsCardsAxios extends Component {
	state = {
		projectsData: [
			// {
			//   quote: "Doughnuts? I told you I don't like ethnic food",
			//   character:	"Mr. Burns",
			//   image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
			//   characterDirection: "Right"
			// }
		]
	};

	componentDidMount() {
		this.getProjectsData();
	}

	// / récup des données brutes, sous forme de tableau d'objets
	getProjectsData = async () => {
		const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');
		// / MàJ du state initial, via le setState
		this.setState({
			projectsData: response.data
		});
		console.log(this.setState)
	};

	render() {
		console.log('this.state.projectsData : ' + this.state.projectsData);

		// / déconstruction du state et alias du this.state
		const { projectsData } = this.state;

		return (
			<div>
				<div className="container">
					<h1>props depuis FrProjetsCardsM <br />map + ...elem</h1>

					<div className="row">
						{projectsData.map((elem) => <FrProjetsCardsM {...elem} key={elem.character} />)}
					</div>
				</div>

				{/* <div>
					<h1>retourne directement ici</h1>					
						{projectsData.map((elem) => (							
								<img src={elem.image} alt={elem.character} />
						))}
				</div> */}

			</div>
		);
	}
}

export default FrProjetsCardsAxios;
