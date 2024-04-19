import React from "react";
import Articles from '../components/Articles/ArticleContainer'
import aboutMe from '../assets/json/aboutMe.json'
import ArtPage from '../components/ArtPage/ArtPage'
// import articleArt from './HomeArticle'
import '../assets/css/Home.css'

export default function Home(){
    return(
        <div className="flex-container-column homeClass">
            <div className="goalsContainer">



                    <>
                        <div className="flex-container-column homeSide">
                                <div className="flex-container-row center-content">
                                    <div className="articleTitle">
                                    <h2 className="centerFlavorTitle">//</h2> 
                                    <h2 className="articleText">Who am I?</h2>
                                    <h2 className="centerFlavorTitle">//</h2> 
                                </div>
                                <img src="https://gist.githubusercontent.com/Valleyleaf/5af59e00b00c73819973436218d03c9a/raw/c3f06b2a57ad1c2caa998eb0affbc75cd840d355/gistfile1.txt" alt="img" />
                                </div>
                                    <div className="articleBoundry">
                                    <p className="articleText">{aboutMe.aboutMe2}</p>
                                    <p className="articleText">{aboutMe.aboutMe3}</p>
                                    </div>
                        </div>
                            {/* <div className="profileImage">
                                <img className="profileImage profile0" src="src\assets\img\Profile\Profile_0000_Flame-2.png" alt="ImageofRatMaestro" />
                                <img className="profileImage profile1" src="src\assets\img\Profile\Profile_0001_Flame-1.png" alt="ImageofRatMaestro" />
                                <img className="profileImage profile2" src="src\assets\img\Profile\Profile_0002_Head.png" alt="ImageofRatMaestro" />
                                <img className="profileImage profile3" src="src\assets\img\Profile\Profile_0003_Layer-1.png" alt="ImageofRatMaestro" />
                            </div> */}
                    </>
            </div>
        </div>
    );
};