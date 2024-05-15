import React from "react";
import aboutMe from '../assets/json/aboutMe.json'
import '../assets/css/About.css'

export default function AboutMe(){
    return(
        <div className="formStyling">
            <h1>About Me</h1>
            <div className="flex-container-column homeSide">
                                <div className="flex-container-row center-content">
                                    <div className="articleTitle">
                                    <h2 className="centerFlavorTitle">//</h2> 
                                    <h2 className="articleText">Who am I?</h2>
                                    <h2 className="centerFlavorTitle">//</h2> 
                                </div>
                                </div>
                                    <div className="articleBoundry">
                                    <p className="articleText">{aboutMe.aboutMe2}</p>
                                    <p className="articleText">{aboutMe.aboutMe3}</p>
                                    </div>
                        </div>






        </div>
    );
};