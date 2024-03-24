import React, { useState, useEffect } from 'react';
import {slideTitle, slideContent, slideCost, slideAvailability} from '../assets/js/Gallery'
import '../assets/css/Articles.css'

import gal0 from '../assets/img/SJshot.jpg'


const gallery = [
  gal0,
]

export default function articleArt(){
    return (
    <div className='responsive-grid'>

    <div className='displayImageSmall fade-in'>
    <h2 className='artTitleWhite'>{slideTitle[0]}</h2>
    <img className='imgFit' src={gallery[0]} alt="DisplayedArtwork"/>
    <p className='artTitleWhite'>{slideContent[0]}</p>
    <div className='artCostContainer center-content'>
        <div className='flex-container-row'>
        <h3 className='artTitleWhite statusSpace'>Status:</h3>
        <h3 className='artTitleWhite'>{slideAvailability[0]}</h3>
        </div>
        <h3 className='artTitleWhite'>Price: {slideCost[0]}</h3>
        <button className='CartButton'>Add to Cart</button>
    </div>
    </div>

    </div>  
    );
};