import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = ({isArticles, isLoggedIn, menuOpen, toggleMenu, children})=>
{
    
    return (
        <>
            <nav className={`nav ${menuOpen ?  'nav__menu--open':'nav__menu--close'}`} onClick={toggleMenu}>
                <ul className="nav__menu">
                    <li className={`nav__item ${!isArticles && 'nav__item-picked'}`}>
                        <Link to="/" className='nav__link'>
                            Home
                        </Link>
                    </li>
                    {isLoggedIn &&(
                    <li className={`nav__item ${isArticles && 'nav__item-picked'}`}>
                        <Link to="/articles" className='nav__link'>
                            Saved articles
                        </Link>
                    </li>)}
                    <li className='nav__item'>
                        {children}
                    </li>
                </ul>
            </nav>
            
            <button 
                className={`nav__menu-button 
                    ${isArticles ? 'nav__menu-button--black': 'nav__menu-button--white'}
                    ${menuOpen ? 'nav__menu-button-close' : ''}`} 
                type='button' onClick={toggleMenu}></button>
        </>
    );
}

export default Navigation;