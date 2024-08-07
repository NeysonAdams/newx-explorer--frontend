import React from "react";
import './Main.css';

import About from "../About/About";
import SearchResult from "../SearchResult/SearchResult";

const Main = ({isSerchingStarted, articlesObserv, totalArticles, articles, showMoreHandler, isLoggedIn})=>
{
    return (
        <>
            <SearchResult
                isSerchingStarted={isSerchingStarted} 
                articlesObserv={articlesObserv}
                totalArticles={totalArticles}
                articles={articles}
                showMoreHandler={showMoreHandler}
                isLoggedIn={isLoggedIn}/>
            <About/>
        </>
    );
}

export default Main;