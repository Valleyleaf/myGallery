import React from "react";
import {GalleryData, artistDisc} from '../assets/js/Gallery'
// import articleArt from './HomeArticle'
import '../assets/css/Home.css'

export default function Home(){

    function value(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      //
      const rndInt = value(0, GalleryData.length - 1);
      //Pulls between 0 and length of GalleryData

    const renderImage = (i) => {
        return (
            <img className='homeImage fade-in' src={GalleryData[i].image} alt="DisplayedArtwork" />
        );
      };

      const renderInfo = (i) => {
        return (
          <div className='imageInfoClass fade-in'>
              <div className='flex-container-row center-content'>
                <h2 className='yellowText'>{GalleryData[i].name}</h2>
              </div>
            <p className='artTitleWhite'>{GalleryData[i].description}</p>
          </div>
        );
      };

    return(
      <div className="homeContainer"> 
        <h2 className='flex-container-column center-content galleryTitle'>Welcome</h2>
        <div className="flex-container-row homeClass">
          <div className="renderInfo">
            <div className="flex-container-column">
            <h2 className="yellowText">The Artist</h2>
            <p className="whiteText imageInfoClass">{artistDisc}</p>
            {renderInfo(rndInt)}
          </div>
            </div>
          <div>
          {renderImage(rndInt)}
          </div>
    </div>
    </div>
    );
};