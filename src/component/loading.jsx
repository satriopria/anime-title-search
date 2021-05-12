import React from 'react';
import './load.css';

const Loading = _ => {
    return(
        <div className="w-100 text-center">
        <div className="lds-hourglass"></div>
        </div>
    );
}

export default Loading;