import React, { useState, useEffect } from 'react';
import {slideTitle, slideContent, slideCost, slideAvailability, slideImage} from '../../assets/js/Gallery'
import artDigital from './ArtPage2'
import './artPage.css'

  export default function Art(){
  return (
    <>
    <div className=' artPageClass gallery-flex-container-column'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Gallery</h2>
        <div className='flex-container-row center-content'>
        <h3 className='artTitleWhite'>NOTE:</h3>
        <p className='pushDownArt artTitleWhite'>All prices are flat and include taxes.</p>
        </div>
      </div>
        <div className='gallery-flex-container-row center-content'>
        <div className='responsive-grid'>
          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleWhite'>{slideTitle[0]}</h2>
            <img className='imgFit' src={slideImage[0]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[0]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[0]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[0]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageMedium fade-in-from-left'>
            <h2 className='artTitleWhite'>{slideTitle[3]}</h2>
            <img className='imgFit' src={slideImage[3]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[3]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[3]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[3]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageSmall fade-in-from-bottom'>
            <h2 className='artTitleWhite'>{slideTitle[6]}</h2>
            <img className='imgFit' src={slideImage[6]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[6]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[6]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[6]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>
      </div>

      {/* Row 1 */}

      <div className='responsive-grid'>
          <div className='displayImageMedium fade-in-from-top'>
            <h2 className='artTitleWhite'>{slideTitle[1]}</h2>
            <img className='imgFit' src={slideImage[1]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[1]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[0]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[0]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageSmall fade-in'>
            <h2 className='artTitleWhite'>{slideTitle[4]}</h2>
            <img className='imgFit' src={slideImage[4]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[4]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[4]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[4]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageLarge fade-in-from-bottom'>
            <h2 className='artTitleWhite'>{slideTitle[7]}</h2>
            <img className='imgFit' src={slideImage[7]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[7]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[7]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[7]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>
      </div>

      {/* Row 2 */}

      <div className='responsive-grid'>
          <div className='displayImageSmall fade-in-from-top'>
            <h2 className='artTitleWhite'>{slideTitle[2]}</h2>
            <img className='imgFit' src={slideImage[2]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[2]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[2]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[2]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageLarge fade-in-from-right'>
            <h2 className='artTitleWhite'>{slideTitle[5]}</h2>
            <img className='imgFit' src={slideImage[5]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[5]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[5 ]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[5]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>

          <div className='displayImageMedium fade-in-from-bottom'>
            <h2 className='artTitleWhite'>{slideTitle[8]}</h2>
            <img className='imgFit' src={slideImage[8]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{slideContent[8]}</p>
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleWhite statusSpace'>Status:</h3>
              <h3 className='artTitleWhite'>{slideAvailability[8]}</h3>
              </div>
              <h3 className='artTitleWhite'>Price: {slideCost[8]}</h3>
              <button className='CartButton'>Purchase</button>
            </div>
          </div>
      </div>
      {/* Row 3*/}
      </div>
    </div>
    {/* <div>{artDigital()}</div> */}
    </>
  );
};

