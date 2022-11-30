import React from 'react';
import map from '../assets/map.png';
import Header from '../components/Header';
import Map from '../components/Map';

const MapPage = () => {
    return (
        <>
            <Header/>
            <div className='mapPage'>
                <Map/>
            </div>
        </>
    );
};

export default MapPage;