import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Title.css'

export default function Header(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div>
        <Link
          to="/"
          className="flex-container-column headerClass title titleAnimation"
          onClick={handleLinkClick}
        >
                <h2 className="title">Rat</h2>
                <h2 className="title2">Maestro</h2>
        </Link>
        </div>
    );
};