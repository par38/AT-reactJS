// / class

// /PageFrHome

import React, { Component } from 'react';
import axios from 'axios';

import FrHeader from '../FrHeader/FrHeader'
import './FrHome.css';
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
    // . console.log("this.state.homePicture getHomePicure : " + this.state.homePicture)
  }

  render() {
    // . console.log("this.state render : " + this.state)
    const { homePicture: { picture_large }, isLoading } = this.state;

    return (
      <>
        {isLoading ?
          <div> Loading... </div>
          :
          (
            <div className="backgroundDiv">

              <div className="backgroundImg" style={{
                backgroundImage: `url(${picture_large})`
              }} >
                <div className="headerHome">
                  <FrHeader />
                </div>
              </div>
            </div>
          )
        }
      </>
    )
  }
}

export default FrHome;
