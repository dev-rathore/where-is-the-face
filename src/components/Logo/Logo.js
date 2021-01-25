import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.jpg';

const Logo = () => {
  return (
      <Tilt className="br2 shadow-2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
        <div className="Tilt-inner">
          <img alt='logo' src={logo} className="br2"
          height="80" width="80"/>
        </div>
      </Tilt>
  );
}

export default Logo;