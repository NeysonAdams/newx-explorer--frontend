import React, { useContext } from 'react';
import './SavedArticles.css';

import Card from "../Card/Card";

import CurrentUserContext from '../../context/CurrentUserContext';

const SavedArticles =({articles, isLoggedIn,
    onSawe,
    onDelete,
    onSngUpOpen})=>
{   
    const {currentUser} = useContext(CurrentUserContext);

    const getKeyWords = () =>{
        if(articles==null || articles.length==0)
            return "";
        const keywords = articles.map(article => article.keyword);
        const uniqueKeywords = [...new Set(keywords)];

        if(uniqueKeywords.length === 1)
            return uniqueKeywords[0];
        else if(uniqueKeywords.length === 2)
            return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}`

        return `${uniqueKeywords[0]}, ${uniqueKeywords[1]} and ${uniqueKeywords.length-2} other`
    }

    return (
        <>
            <div className='info'>
                <div className='info__container'>
                    <p className='info__title'>Saved articles</p>
                    <h4 className='info__subtitle'>{`${currentUser.name}, you have ${articles ==null ? 0 : articles.length} saved articles`}</h4>
                    <p className='info__label'>By keywords: 
                        <span className='info__keywords'> {getKeyWords()}</span> </p>
                </div>
            </div>
            <div className='search'>
                
            <div className="search__container">
            <div className="search__grid">
                    <ul className="search__grid-cards">
                        {articles.map((item)=> (
                            <Card  
                                item={item} 
                                isArticles={true} 
                                key={item._id} 
                                Sawed={true} 
                                isLoggedIn={isLoggedIn} 
                                onSawe={onSawe} 
                                onDelete={onDelete}
                                onSngUpOpen={onSngUpOpen}/>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}

export default SavedArticles;