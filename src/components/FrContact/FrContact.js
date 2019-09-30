import React, { Component } from 'react';
import axios from 'axios'

import { H2, NotH2 } from '../Styled-components'

import './FrContact.css'

// / http://localhost:8000/contact
// * GET : address_street, address_city, mail, tel, linkedin
class FrContact extends Component {
  state = {
    contactData: [],
    isLoading: true
  }

  componentDidMount() {
    this.getContactData()
  }

  getContactData = async () => {
    const response = await axios.get(`http://localhost:8001/api/contact`);
    this.setState({ contactData: response.data[0], isLoading: false });
    // . console.log("response.data : ", response.data)
  }

  render() {
    // .console.log("render this.state.contactData : ", this.state.contactData)

    const { address_street, address_city, mail, tel, linkedin, isLoading } = this.state.contactData

    // . console.log("render destructure :", { linkedin })

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <>
        <div className="contact">
          <H2>{address_street}</H2>
          <NotH2>{address_city}</NotH2>
          <br />
          <H2><a href={`mailto:${mail}`}>{mail}</a></H2>
          {/* vieille syntaxe :
            <a href={"mailto:" + mail}>email</a>
            */}
          <br />
          <H2>{tel}</H2>
          <br />
          <NotH2><a href={linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a></NotH2>
        </div>
      </>
    )
  }
}

export default FrContact

