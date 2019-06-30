import React from 'react';

import FrMenu from '../FrMenu/FrMenu'
import './FrHeader.css'

import logo from '../../assets/svg/logoAT-nb.svg'

const FrHeader = () => {
  return (
    <div className='header'>
      <FrMenu style={{ zIndex: 1 }} />
      <img
        src={logo}
        alt="logo Atelier TARABUSI"
        width="300vw"
      />
    </div>
  )
}

export default FrHeader
