import React from 'react';
import './Auth.css';

const Auth = ({onSignUpOpen, isArticles, menuOpen})=>
{
    return (
        <>
            <button 
            className={`auth ${isArticles && !menuOpen ? 
                'auth__sighin-button-black-style' : 
                'auth__sighin-button-white-style'}`} 
            type='button' 
            onClick={onSignUpOpen}>Sign in</button>
        </>
    );
}

export default Auth;