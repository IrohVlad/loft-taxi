import React from 'react';
import map from '../assets/map.png';
import Header from '../components/Header';

const MapPage = () => {
    return (
        <>
            <Header/>
            <div className='mapPage'>
                <img src={map} alt="" />
            </div>
        </>
    );
};

export default MapPage;