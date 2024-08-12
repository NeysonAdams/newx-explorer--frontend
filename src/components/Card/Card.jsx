import React, {useState, useEffect} from "react";
import './Card.css';

import test from "../../images/test/image_04.png"

const Card =({item, isLoggedIn, Sawed, onSawe, onDelete, onSngUpOpen, isArticles=false})=>
    {
        const [isSawed, setSawed] = useState(false);
        const [showExtraMessage, setShowExtraMessage] = useState(false);

        useEffect(() => {
            setSawed(Sawed);
          }, [Sawed]);

        const formatISODate = (isoDate)=> {
            const date = new Date(isoDate);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

        const handleMouseEnter = () => {
            setShowExtraMessage(true);
        };
    
        const handleMouseLeave = () => {
            setShowExtraMessage(false);
        };

        const handleSaweClick = ()=>
        {
            if(!isLoggedIn) {
                onSngUpOpen();
                return;
            }
            setSawed(!isSawed)

            if(isSawed || isArticles)
            {
                onDelete({article:item});
            }else{
                
                onSawe({article:item});
            }
        }

        return (
            <li className="card">
                <div className="card__image-container">
                    <img className="card__image" src={item.image} alt="img" />
                </div>
                <button className={`card__button ${isArticles?
                    'card__delete-button':'card__save-button'}
                    ${!isArticles && isSawed && isLoggedIn && 'card__save-button-picked'}`} 
                    type="button" 
                    onClick={handleSaweClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ></button>
                { (!isLoggedIn || isArticles)  &&
                    (
                    <div className={`card__extra-message ${showExtraMessage && 'card__extra-message-show'}`}>
                        {!isArticles?'Sign in to save articles':'Remove from saved'}
                    </div>    
                    )
                }

                { isArticles && (<div className="card__keyword">{item.keyword}</div> ) }

                <p className="card__date">{formatISODate(item.date)}</p>
                <h4 className="card__title">{item.title}</h4>
                <p className="card__description">{item.text}</p>
                <p className="card__from">{ item.source.toUpperCase()}</p>
            </li>
        );
    }
    
    export default Card