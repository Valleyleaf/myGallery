import React from "react";
import {Link, useLocation} from 'react-router-dom'
import footer from './Footer'
import '../assets/css/Navbar.css'
import linkedinButton from '../assets/icons/linkedin-fill-svgrepo-com.svg'
import twitterButton from '../assets/icons/twitter-fill-svgrepo-com.svg'
import gitHubButton from '../assets/icons/github-fill-svgrepo-com.svg'
import instagramButton from '../assets/icons/instagram-fill-svgrepo-com.svg'

export default function Navbar(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="NavClass">
            <div className="navButton">
                <Link
                to="/"
                className="navButton"
                >
                Maestro
                </Link>
            </div>

            <div className="navButton">
                <Link
                to="/Gallery"
                className="navButton"
                >
                Art Gallery
                </Link>
            </div>

            <div className="navButton">
                <Link
                to="/Photography"
                className="navButton"
                >
                Photography
                </Link>
            </div>

            <div className="navButton">
                <Link
                to="/About"
                className="navButton"
                >
                About
                </Link>
            </div>

            <div className="navButton">
                <Link
                to="/Contact"
                className="navButton"
                >
                Contact
                </Link>
            </div>

            <div>
                <Link
                to="/Cart"
                >
                <img className="navCartImg" src="src\assets\icons\cart-1-svgrepo-com.svg" alt="Cart"/>
                </Link>
            </div>

            <div className='footerRow'>
            <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
            <img className='small-img' src={linkedinButton} alt="link to linkedin" />
            </a>

            <a href="https://github.com/Valleyleaf" target="_blank">
            <img className='small-img' src={gitHubButton} alt="link to github" />
            </a>

            <a href="https://twitter.com/ValleyleafSys" target="_blank">
            <img className='small-img' src={twitterButton} alt="link to Twitter" />
            </a>

            <a href="https://www.instagram.com/kingirat/" target="_blank">
            <img className='small-img' src={instagramButton} alt="link to Instagram" />
            </a>
            </div>
        </div>
    );
};