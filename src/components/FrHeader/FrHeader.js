import React from 'react';

import FrMenu from '../FrMenu/FrMenu'

import logo from '../../assets/svg/logoAT-nb.svg'

const FrHeader = () => {
  return (
    <div>
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
