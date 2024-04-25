import React, { useState, useEffect } from 'react';
import {GalleryData} from '../../assets/js/Gallery'
import '../../assets/css/artPage.css'


function Art() {
  const renderItems = () => {
    return GalleryData.map((data, id) => (
      <div key={id} className='displayImageLarge fade-in'>
          <div className='flex-container-row center-content'>
            <h2 className="centerFlavorTitle">//</h2>
            <h2 className='artTitleWhite'>{data.name}</h2>
            <h2 className="centerFlavorTitle">//</h2>
          </div>
        <img className='imgFit' src={data.image} alt="DisplayedArtwork" />
        <p className='artTitleWhite'>{data.description}</p>
        <div className='artCostContainer center-content'>
          <div className='flex-container-row'>
            <h3 className='artTitleWhite'>Status:</h3>
            <h3 className='artTitleWhite'>{data.Availability}</h3>
          </div>
          <h3 className='artTitleWhite'>Price:{data.cost}</h3>
          {/* <button className='CartButton'>Add to Cart</button> */}
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
