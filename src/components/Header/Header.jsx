import React, { useState, useEffect ,useContext} from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';
import SearchForm from '../SearchForm/SearchForm';

import menu from "../../images/menu.svg"

const Header = ({onSignUpOpen, isLoggedIn, onSerch, isArticles=false}) =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className={`header ${isArticles?'header__style':'header-main_style'}`}>
            <div className={`header__head 
                ${isArticles && 'header__head-style'}
                ${menuOpen ? 'header__menu--open':''}`}>
                <h2 className='header__logo'>NewsExplorer</h2>
                <div className='header__interactive'>
                    <Navigation isArticles={isArticles} isLoggedIn={isLoggedIn} menuOpen={menuOpen} toggleMenu={toggleMenu}>
                        <Auth onSignUpOpen={onSignUpOpen} isArticles={isArticles} menuOpen={menuOpen}/>
                    </Navigation>
                </div>
            </div>
            {!isArticles && (
            <div className='header__banner'>
                <h1 className='header__bunner-title'>What's going on in the world?</h1>
                <p className='header__bunner-subtitle'>Find the latest news on any topic and save them in your personal account.</p>
                <SearchForm onSerch={onSerch}/>
            </div>
            )}
            
        </header>
    );
}
export default Header;