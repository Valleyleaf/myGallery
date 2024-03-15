import React from "react";
import Articles from '../components/Articles/ArticleContainer'
import aboutMe from '../assets/json/aboutMe.json'
import '../assets/css/Home.css'

export default function Home(){
    return(
        <div className="flex-container-column homeClass">
            <div className="goalsContainer">
                <h2>Goals of a Rat</h2> 
                <p>{aboutMe.aboutMe}</p>
            </div>
        </div>
    );
};