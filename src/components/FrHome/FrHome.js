// / class

// /PageFrHome

import React, { Component } from 'react';
import axios from 'axios';

import './FrHome.css';
// import FrHeader from '../FrHeader/FrHeader'
class FrHome extends Component {
  state = {
    homePicture: [],
    isLoading: true
  }

  componentDidMount() {
    this.getHomePicture();
  }

  getHomePicture = async () => {
    const response = await axios.get('http://localhost:8001/api/home')
    this.setState({
      homePicture: response.data[0],
      isLoading: false
    })
    console.log("this.state.homePicture getHomePicure : " + this.state.homePicture)
  }


  render() {
    console.log("this.state render : " + this.state)
    const { homePicture: { picture_large, alt }, isLoading } = this.state;

    return (
      <>
        {isLoading ?
          <div> Loading... </div>
          :
          (
            <div>
              <img
                className="responsive-img"
                id="image-home"
                src={picture_large}
                alt={alt}

                // *très important : permet la responsivité de l'image
                height="500"
              />
              {/* <div className="container" id="container-home">   
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <p>{alt}</p>
                    </div>
                  </div>
                </div> 
                */}
            </div>
          )
        }
      </>
    )
  }
}

export default FrHome;
