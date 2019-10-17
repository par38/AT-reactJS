// / PageFrProjets
// / FrProjetsCardsAxios (class)
// / FrProjetsCardsM(fonction)

import React, { Component } from 'react';
import axios from 'axios';

import FrProjetsCardsM from './FrProjetsCardsM';
import './FrProjetsCards.css'

class FrProjetsCardsAxios extends Component {
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

	render() {
		// . console.log('this.state.projectsData : ' + this.state.projectsData);

		// / déconstruction du state et alias du this.state
		const { projectsData } = this.state;
		// . console.log("render projectsData : ",projectsData)

		return (
			<div>
				<div className="container">
					<div className="row">
						{projectsData
							.filter(elem => elem.project_published)
							.filter(elem => elem.picture_small)
							.map((elem) => <FrProjetsCardsM {...elem} key={elem.project_id} />)}
					</div>
				</div>
			</div>
		);
	}
}

export default FrProjetsCardsAxios;
