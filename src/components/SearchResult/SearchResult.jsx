import React, {useState} from "react";
import './SearchResult.css';

import Preloader from "../Preloader/Preloader";
import NotFounding from "../NotFounding/NotFounding";
import Card from "../Card/Card";

const SearchResult =(
    {isSerchingStarted, 
        articlesObserv, 
        totalArticles, 
        articles,
        keyword,
        showMoreHandler, 
        isLoggedIn,
        isArticleSawed,
        onSawe,
        onDelete
    })=>
{
    
    
    return (
        <>
        {isSerchingStarted && (
            <div className="search">
                <Preloader/>
            </div>
        )}
        
        {
            articles!=null && articles.length===0 && (
                <div className="search">
                    <NotFounding/>
                </div>

            )
        }

        {
            articles!=null &&
            (
                <div className="search">
                    <div className="search__container">
                        <h2 className="search__title">Search results</h2>
                        <div className="search__grid">
                            <ul className="search__grid-cards">
                                {
                                (() => {
                                    const result = [];
                                    for (let index = 0; index < articlesObserv; index++) {
                                        //keyword, title, text, date, source, link, image
                                        const article = {
                                            "keyword": keyword,
                                            "title":articles[index].title,
                                            "text":articles[index].description,
                                            "source":articles[index].source.name,
                                            "date":articles[index].publishedAt,
                                            "link":articles[index].url,
                                            "image":articles[index].urlToImage,
                                        }

                                        const id = isArticleSawed({article});

                                        result.push(<Card 
                                            item={article} 
                                            key={index} 
                                            Sawed={id!==-1} 
                                            isLoggedIn={isLoggedIn} 
                                            onSawe={onSawe} 
                                            onDelete={onDelete}/>);
                                    }
                                    return result;
                                })()
                                }
                            </ul>
                        </div>
                        
                        {
                            articlesObserv < totalArticles && 
                            (<button 
                                className="search__buuton-showmore"
                                onClick={showMoreHandler}>Show more</button>)
                        }
                    </div>
                </div>
            )
        }
        
        </>
    );
}

export default SearchResult;