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
            <div>
                <Link
                to="/"
                className="navButton icon-spinner"
                >
                My Goal
                </Link>
            </div>

            <div>
                <Link
                to="/Gallery"
                className="navButton icon-spinner"
                >
                For Sale
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