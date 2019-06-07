// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React, { Component } from 'react';
import axios from 'axios';

import FrProjetsCardsM from './FrProjetsCardsM';

// + import M from 'materialize-css';

class FrProjetsCardsAxios extends Component {
	state = {
		projectsData: []
	};

	componentDidMount() {
		this.getProjectsData();
	}

	// / récup des données brutes, sous forme de tableau d'objets
	getProjectsData = async () => {
		// const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');
		const response = await axios.get('http://localhost:8001/api/projets')
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
					<div className="row">
						{projectsData.map((elem) => <FrProjetsCardsM {...elem} key={elem.id} />)}
					</div>
				</div>

				{/* <div>     // Simpsons (image et character)
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
