import React, { Component } from 'react';
import axios from 'axios'

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

    return (
      <>
        {isLoading ?
          <div>Loading...</div> :

          (
            <div className="contact">
              <p>{address_street}</p>
              <p>{address_city}</p>
              <a href={`mailto:${mail}`}>{mail}</a>
              {/* vieille syntaxe :
            <a href={"mailto:" + mail}>email</a>
            */}
              <p>{tel}</p>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          )
        }
      </>
    )
  }
}

export default FrContact

