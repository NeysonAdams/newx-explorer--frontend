import React, {useContext} from 'react';
import './Auth.css';

import CurrentUserContext from '../../context/CurrentUserContext';

import logoutBlack from "../../images/logout_black.svg";
import logoutWhite from "../../images/logout_white.svg";

const Auth = ({onSignUpOpen, isArticles, menuOpen, onLogOut})=>
{
    const {currentUser} = useContext(CurrentUserContext);

    const buttonHandler = ()=>
    {
        if(currentUser===null)
            onSignUpOpen();
        else
            onLogOut()
    }

    return (
        <>
            <button 
            className={`auth ${isArticles && !menuOpen ? 
                'auth__sighin-button-black-style' : 
                'auth__sighin-button-white-style'}`} 
            type='button' 
            onClick={buttonHandler}>
                {currentUser?
                    ( 
                        <>
                            <p className='auth__name'>{currentUser.name}</p>
                            <img className="auth__logout" 
                                src={isArticles?
                                        logoutBlack:
                                        logoutWhite}
                                alt='logout'/>
                        </>
                    ) 
                    :"Sign in"}
                </button>
        </>
    );
}

export default Auth;