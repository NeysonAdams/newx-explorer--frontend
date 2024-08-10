import React from "react";
import './Main.css';

import About from "../About/About";
import SearchResult from "../SearchResult/SearchResult";

const Main = ({isSerchingStarted, articlesObserv, totalArticles, articles, 
    keyword, showMoreHandler, isLoggedIn, isArticleSawed, onSawe, onDelete,})=>
{
    return (
        <>
            <SearchResult
                isSerchingStarted={isSerchingStarted} 
                articlesObserv={articlesObserv}
                totalArticles={totalArticles}
                articles={articles}
                keyword={keyword}
                showMoreHandler={showMoreHandler}
                isLoggedIn={isLoggedIn}
                isArticleSawed={isArticleSawed}
                onSawe={onSawe}
                onDelete={onDelete}/>
            <About/>
        </>
    );
}

export default Main;