import React from "react";
import './NotFounding.css';

import notfound from "../../images/not-found_v1.svg"

const NotFounding = ()=>
{
    return(
        <div className="notfound">
            <img className="notfound__image" src={notfound} alt="Not Found" />
            <h3 className="notfound__title">Nothing found</h3>
            <p className="notfound__subtitle">Sorry, but nothing matched your search terms.</p>
        </div>
    );
}

export default NotFounding;