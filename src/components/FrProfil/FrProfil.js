import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'

import { OneLine, ProfilParagraph } from '../Styled-components'

const Image = styled.img`
  height: 40vh;
  margin-right: 5vw;
  margin-left: 10vw;
  margin-bottom: .5vw;
`;

const Container = styled.div`
  display:flex;
  align-items: flex-end;
`;

class FrProfil extends Component {
  state = {
    profilData: [],
    isLoading: true
  }

  componentDidMount() {
    this.getProfilData();
  }

  getProfilData = async () => {
    const response = await axios.get(`http://localhost:8001/api/profil`)
    this.setState({ profilData: response.data, isLoading: false });
    // . console.log("getProfilData response.data : ", response.data)
  }

  render() {
    // . console.log("render this.state.profilData : ", this.state.profilData[0])
    // . console.log("render this.state : ", this.state)

    //* profil_text_fr, profil_order_fr, profil_picture, alt
    const { profilData, isLoading } = this.state
    //  .console.log("render destructure :",profilData)

    return (
      <>
        {isLoading
          ? <div>is Loading...</div>
          : (
            <Container>

              <div>
                {profilData.map(photo => !!photo.profil_picture
                  ? (<Image src={photo.profil_picture} alt={photo.alt} key={photo.id} />)
                  : ''
                )}
              </div>

              <div>
                {profilData.map(text => (
                  <OneLine>
                    <ProfilParagraph key={text.id}>{text.profil_text_fr}</ProfilParagraph>
                  </OneLine>))}
              </div>
            </Container>
          )}
      </>
    )
  }
}


export default FrProfil