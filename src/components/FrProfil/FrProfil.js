import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'

import { OneLine, ProfilParagraph, tablet, desktop, xlDesktop } from '../Styled-components'

const Image = styled.img`
  height: 40vh;
  margin-right: 2vw;
  margin-left: 2vw;
  margin-bottom: .5vw;
`;

const Order = styled.div`

order: 1;

@media (min-width: ${tablet}) {
  order: 1;
};

@media (min-width: ${desktop}) {
  order: -1;
};

@media (min-width: ${xlDesktop}) {
  order: -1;
};
`;

const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;


  @media (min-width: ${tablet}) {
    display:flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
  };

  @media (min-width: ${desktop}) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  };

  @media (min-width: ${xlDesktop}) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  };
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

              <Order >
                {profilData.map(photo => !!photo.profil_picture
                  ? (<Image src={photo.profil_picture} alt={photo.alt} key={photo.id} />)
                  : ''
                )}
              </Order>

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