import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {PhotographyGallery} from '../../assets/js/Photography'
import './photography.css'

function Photography() {
  const renderItems = () => {
    return PhotographyGallery.map((data, id) => (
      <div key={id} className='photoImage fade-in'>
          <div className='flex-container-row center-content'>
            <h2 className="centerFlavorTitle">//</h2>
            <h2 className='artTitleWhite'>{data.name}</h2>
            <h2 className="centerFlavorTitle">//</h2>
          </div>
          <Link
          to={data.image}
          className='thumbnail'
          >
          <img className='imgFit' src={data.image} alt={data.alt} />
          </Link>
        <p className='artTitleWhite'>{data.description}</p>
      </div>
    ));
  };

  return (
    <div className='photo-flex-container'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Photography</h2>
        <div className='flex-container-row center-content'>
        <h3 className='artTitleWhite'>NOTE:</h3>
        <p className='pushDownArt artTitleWhite'>Copyright Aston Andersson Dahllof</p>
        </div>
      </div>
      <div className='gallery-flex-container-row'>
        <div className='photo-grid'>
          {renderItems()}
        </div>
      </div>
    </div>
  );
}

export default Photography;