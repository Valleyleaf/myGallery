import React, { useState, useEffect } from 'react';
import {photoImage, photoTitle, photoDesc} from '../../assets/js/Photography'
import './photography.css'

function Photography() {
  const renderItems = () => {
    return photoImage.map((artwork, index) => (
      <div key={index} className='photoImage fade-in'>
          <div className='flex-container-row center-content'>
            <h2 className="centerFlavorTitle">//</h2>
            <h2 className='artTitleWhite'>{photoTitle[index]}</h2>
            <h2 className="centerFlavorTitle">//</h2>
          </div>
        <img className='imgFit' src={artwork} alt="DisplayedArtwork" />
        <p className='artTitleWhite'>{photoDesc[index]}</p>
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