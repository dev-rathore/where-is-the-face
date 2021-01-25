import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="mt3">
      <div className='f4 para-font'>
        {`Hey ${name}, your current image submission level is... `}
        <div className='dib blue f2'>
          {entries + '/5'}
        </div>
      </div>
    </div>
  );
}

export default Rank;