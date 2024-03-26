import React, { useState, useEffect } from 'react';
import {slideTitle, slideContent, slideCost, slideAvailability, slideImage} from '../../assets/js/Gallery'
import './artPage.css'


function Art() {
  const renderItems = () => {
    return slideImage.map((artwork, index) => (
      <div key={index} className='displayImageLarge fade-in'>
          <div className='flex-container-row center-content'>
            <h2 className="centerFlavorTitle">//</h2>
            <h2 className='artTitleWhite'>{slideTitle[index]}</h2>
            <h2 className="centerFlavorTitle">//</h2>
          </div>
        <img className='imgFit' src={artwork} alt="DisplayedArtwork" />
        <p className='artTitleWhite'>{slideContent[index]}</p>
        <div className='artCostContainer center-content'>
          <div className='flex-container-row'>
            <h3 className='artTitleWhite'>Status:</h3>
            <h3 className='artTitleWhite'>{slideAvailability[0]}</h3>
          </div>
          <h3 className='artTitleWhite'>Price:{slideCost[index]}</h3>
          <button className='CartButton'>Add to Cart</button>
        </div>
      </div>
    ));
  };

  return (
    <div className='gallery-flex-container-column'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Gallery</h2>
        <div className='flex-container-row center-content'>
        <h3 className='artTitleWhite'>NOTE:</h3>
        <p className='pushDownArt artTitleWhite'>All prices are flat and include taxes.</p>
        </div>
      </div>
      <div className='gallery-flex-container-row'>
        <div className='responsive-grid'>
          {renderItems()}
        </div>
      </div>
    </div>
  );
}

export default Art;
