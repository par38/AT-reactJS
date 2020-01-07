import React from 'react';

import FrMenu from '../FrMenu/FrMenu'
import './FrHeader.css'

import logo from '../../assets/svg/logoAT-nb.svg'

const FrHeader = () => {
  return (
    <div className='header'>
      <FrMenu style={{ zIndex: 1 }} />
      <img id="logoAT"
        src={logo}
        alt="logo Atelier TARABUSI"

      />
    </div>
  )
}

export default FrHeader
