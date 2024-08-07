import React from "react";
import './Footer.css';

import { Link } from 'react-router-dom';

import git from "../../images/github.svg";
import fb from "../../images/fb.svg";

const Footer = ()=>
{
    return (
        <footer className="footer">
            <p className="footer__credentional">© 2024 Supersite, Powered by News API</p>
            <div className="footer__container">
                
                <div className="footer__link-container">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="https://tripleten.co.il/" className="footer__link">TripleTen</Link>
                </div>
                <div className="footer__icon-container">
                    <Link to="https://github.com/NeysonAdams">
                    <img className = "footer__link-img" src={git} alt="git" /></Link>
                    
                    <Link to="https://www.facebook.com/nias.adamov">
                    <img className = "footer__link-img" src={fb} alt="facebook" /></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer