import React from "react";
import './Card.css';

import test from "../../images/test/image_04.png"

const Card =({item, isLoggedIn, isArticles=false})=>
    {
        const formatISODate = (isoDate)=> {
            const date = new Date(isoDate);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }
        return (
            <li className="card">
                <div className="card__image-container">
                    <img className="card__image" src={item.urlToImage} alt="img" />
                </div>
                <button className={`card__button ${isArticles?'card__delete-button':'card__save-button'}`} type="button"></button>
                { !isLoggedIn &&
                    (
                    <div className="card__extra-message">
                        {!isArticles?'Sign in to save articles':''}
                    </div>    
                    )
                }
                
                
                <p className="card__date">{formatISODate(item["publishedAt"])}</p>
                <h4 className="card__title">{item["title"]}</h4>
                <p className="card__description">{item["description"]}</p>
                <p className="card__from">{ item.source.name.toUpperCase()}</p>
            </li>
        );
    }
    
    export default Card