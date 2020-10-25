

import React from 'react'
import Logo from '../logo.png'


const image={
    width: '40%',
    height: '80px',
    nargin: '0px',
    padding: '0px'
}


function MoneyLionLogo() {
  
    return (
        <div>
            <img  style={image} src={Logo} />
            <hr/>
        </div>
    )
}

export default MoneyLionLogo;
