import React, { useState, useEffect } from 'react';
import {photoImage, photoTitle, photoDesc} from '../../assets/js/Photography'

  export default function Photography(){
  return (
    <>
    <div className=' artPageClass gallery-flex-container-column'>
      <div>
        <h2 className='flex-container-row center-content artTitleWhite'>Photography</h2>
        <div className='flex-container-row center-content'>
        <h3 className='artTitleWhite'>NOTE:</h3>
        <p className='pushDownArt artTitleWhite'>Copyright Aston Andersson Dahllof</p>
        </div>
      </div>
        <div className='gallery-flex-container-row center-content'>
        <div className='responsive-grid'>
          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleWhite'>{photoTitle[0]}</h2>
            <img className='imgFit' src={photoImage[0]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{photoDesc[0]}</p>
          </div>

          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleWhite'>{photoTitle[1]}</h2>
            <img className='imgFit' src={photoImage[1]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{photoDesc[1]}</p>
          </div>

          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleWhite'>{photoTitle[2]}</h2>
            <img className='imgFit' src={photoImage[2]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{photoDesc[2]}</p>
          </div>

          <div className='displayImageLarge fade-in-from-top'>
            <h2 className='artTitleWhite'>{photoTitle[3]}</h2>
            <img className='imgFit' src={photoImage[3]} alt="DisplayedArtwork"/>
            <p className='artTitleWhite'>{photoDesc[3]}</p>
          </div>
      </div>
      </div>
    </div>
    </>
  );
};

