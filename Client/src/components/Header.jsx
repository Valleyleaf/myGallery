import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Header.css'

export default function Header(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="flex-container-column headerClass ">
        <Link
          to="/"
          className="flex-container-row title titleAnimation"
          onClick={handleLinkClick}
        >
                <h2 className="title pushDown">Rat</h2>
                <h2 className="title2">Maestro</h2>
        </Link>
        <div className="flex-container-row center-content">
        <h3 className="statusSpace">Local rat Artist in Saint John</h3>
        <img className="sjLogo icon-spinnerMeme" src="\src\assets\icons\logo-white.png" alt="City of Saint John logo" />
        </div>

        </div>
    );
};