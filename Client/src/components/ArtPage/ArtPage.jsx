import React, { useState, useEffect } from 'react';
import {slideTitle, slideContent, slideCost, slideAvailability} from '../../assets/js/Gallery'
import './artPage.css'

import gal0 from '../../assets/img/SJshot.jpg'
import gal1 from '../../assets/img/SJshot.jpg'
import gal2 from '../../assets/img/SJshot.jpg'
import gal3 from '../../assets/img/SJshot.jpg'
import gal4 from '../../assets/img/SJshot.jpg'
import gal5 from '../../assets/img/SJshot.jpg'
import gal6 from '../../assets/img/SJshot.jpg'
import gal7 from '../../assets/img/SJshot.jpg'
import gal8 from '../../assets/img/SJshot.jpg'

const gallery = [
  gal0,
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
]

  export default function Art(){
  return (
    <>
    <div className=' artPageClass gallery-flex-container-column'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Gallery</h2>
        <div className='flex-container-row center-content'>
        <h3 className='artTitleWhite'>NOTE:</h3>
        <p className='pushDownArt artTitleWhite'>All prices are final, no refunds, all proceeds go to charity and the upkeep of Saint John</p>
        </div>
      </div>
        <div className='gallery-flex-container-row center-content'>
        <div className='responsive-grid'>
          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleBlack'>{slideTitle[0]}</h2>
            <img className='imgFit' src={gallery[0]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{slideContent[0]}</p>
            
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleBlack statusSpace'>Status:</h3>
              <h3 className='artTitleBlack'>{slideAvailability[0]}</h3>
              </div>
              <h3 className='artTitleBlack'>Price: {slideCost[0]}</h3>
              <button className='CartButton'>Add to Cart</button>
            </div>

          </div>

          <div className='displayImageMedium fade-in-from-left'>
            <h2 className='artTitleWhite'>{slideTitle[3]}</h2>
            <img className='imgFit' src={gallery[3]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[3]}</p>
          </div>

          <div className='displayImageSmall fade-in-from-bottom'>
            <h2 className='artTitleWhite'>{slideTitle[6]}</h2>
            <img className='imgFit' src={gallery[6]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[6]}</p>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageMedium fade-in-from-top'>
            <h2 className='artTitleWhite'>{slideTitle[1]}</h2>
            <img className='imgFit' src={gallery[1]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[1]}</p>
          </div>

          <div className='displayImageSmall fade-in'>
            <h2 className='artTitleWhite'>{slideTitle[4]}</h2>
            <img className='imgFit' src={gallery[4]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[4]}</p>
          </div>

          <div className='displayImageLarge fade-in-from-bottom'>
            <h2 className='artTitleBlack'>{slideTitle[7]}</h2>
            <img className='imgFit' src={gallery[7]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{slideContent[7]}</p>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageSmall fade-in-from-top'>
            <h2 className='artTitleWhite'>{slideTitle[2]}</h2>
            <img className='imgFit' src={gallery[2]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[2]}</p>
          </div>

          <div className='displayImageLarge fade-in-from-right'>
            <h2 className='artTitleBlack'>{slideTitle[5]}</h2>
            <img className='imgFit' src={gallery[5]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{slideContent[5]}</p>
          </div>

          <div className='displayImageMedium fade-in-from-bottom'>
            <h2 className='artTitleWhite'>{slideTitle[8]}</h2>
            <img className='imgFit' src={gallery[8]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[8]}</p>
          </div>
      </div>

      </div>
    </div>
    </>
  );
};

