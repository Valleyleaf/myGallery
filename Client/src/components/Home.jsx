import React from "react";
import Articles from '../components/Articles/ArticleContainer'
import aboutMe from '../assets/json/aboutMe.json'
import '../assets/css/Home.css'

export default function Home(){
    return(
        <div className="flex-container-column homeClass">
            <div className="goalsContainer">
                <h2 className="artTitleWhite">Goals of a Rat</h2> 
                <p className="artTitleWhite">{aboutMe.aboutMe}</p>
                    <div className="flex-container-row">
                        <div className="flex-container-column homeSide">
                            <h2 className="artTitleWhite">So what now?</h2>
                            <p className="artTitleWhite">{aboutMe.aboutMe2}</p>
                        </div>
                        <div className="profileImage">
                            <img className="profileImage profile0" src="src\assets\img\Profile\Profile_0000_Flame-2.png" alt="ImageofRatMaestro" />
                            <img className="profileImage profile1" src="src\assets\img\Profile\Profile_0001_Flame-1.png" alt="ImageofRatMaestro" />
                            <img className="profileImage profile2" src="src\assets\img\Profile\Profile_0002_Head.png" alt="ImageofRatMaestro" />
                            <img className="profileImage profile3" src="src\assets\img\Profile\Profile_0003_Layer-1.png" alt="ImageofRatMaestro" />
                        </div>
                    </div>
            </div>
        </div>
    );
};