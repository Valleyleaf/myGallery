import React, { useState, useEffect } from 'react';
import {digitalArt, digitalTitle, digitalDesc} from '../../assets/js/Gallery'
import './artPage.css'

  export default function ArtDigital(){
  return (
    <>
    <div className=' artPageClass gallery-flex-container-column'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Digital Art</h2>
      </div>
        <div className='gallery-flex-container-row center-content'>
        <div className='responsive-grid'>
          <div className='displayImageLarge fade-in'>
            <h2 className='artTitleBlack'>{digitalTitle[0]}</h2>
            <img className='imgFit' src={digitalArt[0]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{digitalDesc[0]}</p>
            
            <div className='artCostContainer center-content'>
              <div className='flex-container-row'>
              <h3 className='artTitleBlack statusSpace'>Status:</h3>
              <h3 className='artTitleBlack'>Null</h3>
              </div>
              <h3 className='artTitleBlack'>Price: Null</h3>
              <button className='CartButton'>Add to Cart</button>
            </div>

          </div>

          <div className='displayImageMedium fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[3]}</h2>
            <img className='imgFit' src={digitalArt[3]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[3]}</p>
          </div>

          <div className='displayImageSmall fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[6]}</h2>
            <img className='imgFit' src={digitalArt[6]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[6]}</p>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageMedium fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[1]}</h2>
            <img className='imgFit' src={digitalArt[1]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[1]}</p>
          </div>

          <div className='displayImageSmall fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[4]}</h2>
            <img className='imgFit' src={digitalArt[4]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[4]}</p>
          </div>

          <div className='displayImageLarge fade-in'>
            <h2 className='artTitleBlack'>{digitalTitle[7]}</h2>
            <img className='imgFit' src={digitalArt[7]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{digitalDesc[7]}</p>
          </div>
      </div>

      <div className='responsive-grid'>
          <div className='displayImageSmall fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[2]}</h2>
            <img className='imgFit' src={digitalArt[2]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[2]}</p>
          </div>

          <div className='displayImageLarge fade-in'>
            <h2 className='artTitleBlack'>{digitalTitle[5]}</h2>
            <img className='imgFit' src={digitalArt[5]} alt="DisplayedArtwork"/>
            <p className='artTitleBlack'>{digitalDesc[5]}</p>
          </div>

          <div className='displayImageMedium fade-in'>
            <h2 className='artTitleWhite'>{digitalTitle[8]}</h2>
            <img className='imgFit' src={digitalArt[8]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{digitalDesc[8]}</p>
          </div>
      </div>

      </div>
    </div>
    </>
  );
};

