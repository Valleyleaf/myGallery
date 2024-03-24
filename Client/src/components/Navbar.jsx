import React from "react";
import {Link, useLocation} from 'react-router-dom'
import '../assets/css/Navbar.css'

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

            <div>
                <Link
                to="/Cart"
                >
                <img className="navCartImg" src="src\assets\icons\cart-1-svgrepo-com.svg" alt="Cart"/>
                </Link>
            </div>
        </div>
    );
};