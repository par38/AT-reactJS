import React, { Component } from 'react';
import axios from 'axios'

import { OneLine, Paragraph, NotH2 } from '../Styled-components'

class FrPublications extends Component {
  state = {
    publicationsData: [],
    isLoading: true
  }

  componentDidMount() {
    this.getPublicationsData()
  }

  getPublicationsData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVEUR}/api/publications`)
    this.setState({ publicationsData: response.data, isLoading: false })
    // . console.log("getPublicationsData response.data : ", response.data)
  }

  render() {

    return (

      <div>
        {this.state.publicationsData.map(publication =>
          <div key={publication.id}>
            <OneLine>
              <Paragraph>{publication.date_biblio}</Paragraph>
            </OneLine>
            <OneLine>
              <NotH2>{publication.fr_biblio_text}</NotH2>
            </OneLine>
            <OneLine>
              <Paragraph>{publication.fr_biblio_revue}</Paragraph>
            </OneLine>
            <br />
          </div>)}
      </div>
    )
  }
}

export default FrPublications