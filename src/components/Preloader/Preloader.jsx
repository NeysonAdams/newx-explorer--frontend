import React, { useState, useEffect } from 'react';
import './Preloader.css';

import preloader from '../../images/Ellipse.png';

const Preloader = ()=>
{
    return (
        <div className='preloader'>
            <div className='preloader__circle-preloader'></div>
            <p className='preloader__message'>Searching for news...</p>
        </div>
    );
}

export default Preloader;