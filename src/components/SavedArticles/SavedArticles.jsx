import React from 'react';
import './SavedArticles.css';

import Card from "../Card/Card";

const SavedArticles =({articles, isLoggedIn})=>
{
    return (
        <>
            <div className='info'>
                <div className='info__container'>
                    <p className='info__title'>Saved articles</p>
                    <h4 className='info__subtitle'>{`Elise, you have ${articles ==null ? 0 : articles.length} saved articles`}</h4>
                    <p className='info__label'>By keywords: 
                        <span className='info__keywords'> Nature, Yellowstone, and 2 other</span> </p>
                </div>
            </div>
            <div className='search'>
                
            <div className="search__container">
            <div className="search__grid">
                    <ul className="search__grid-cards">
                        {articles.map((item)=> (
                            <Card  item={item} isArticles={true} key={item._id} isLoggedIn={isLoggedIn}/>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}

export default SavedArticles;