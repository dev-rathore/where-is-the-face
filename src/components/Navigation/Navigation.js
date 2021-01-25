import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <div className="navigation">
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='f4 link dim starWhite pr4 pv1 pointer'>Sign Out</p>
          </nav>
        </div>
          
      );
    } else {
      return (
        <div className="navigation">
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f4 link dim starWhite pr4 pv1 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f4 link dim starWhite pr4 pv1 pointer'>Register</p>
          </nav>
        </div>
        
      );
    }
}

export default Navigation;