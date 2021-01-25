import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4 para-font'>
        {'This App will detect face in pictures. Give it a try.'}
      </p>
      <div className='form'>
        <input className='ba b--blue bg-white f5 pa2 mt2 input-border' type='text' onChange={onInputChange}/>
        <button
          className='ba b--blue white bg-blue f5 pv2 mt2 link pointer btn btn-border'
          onClick={onButtonSubmit}
        >Find Face</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;