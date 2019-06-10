import React, { Component } from 'react';
import axios from 'axios'

class FrPublications extends Component {
  state = {
    publicationsData: [],
    isLoading: true
  }

  componentDidMount() {
    this.getPublicationsData()
  }

  getPublicationsData = async () => {
    const response = await axios.get(`http://localhost:8001/api/publications`)
    this.setState({ publicationsData: response.data, isLoading: false })
    // . console.log("getPublicationsData response.data : ", response.data)
  }

  render() {
  
    return (

      <div>
        {this.state.publicationsData.map(publication => 
          <div key={publication.id}>
            <p>{publication.date_biblio}</p>
            <p>{publication.fr_biblio_text}</p>
            <p>{publication.fr_biblio_revue}</p>
            <br/>
        </div>)}
      </div>
    )
  }
}

export default FrPublications