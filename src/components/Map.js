import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
    let map = null;
    const mapContainer = useRef()
    useEffect(()=>{
        mapboxgl.accessToken = "pk.eyJ1IjoiaXJvaHZsYWQiLCJhIjoiY2xiMHZwMGg4MDRmbTN3bW16YzZ4bnlleCJ9.YZ5t91AAiCt_qyNRmn90SQ";
        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [37.5547, 55.4242],
            zoom: 10
        });
        return () => {
            map.remove();
        }
    })
    return (
        <div className='map-wrapper'>
            <div ref={mapContainer} className='map'>

            </div>
        </div>
    );
};

export default Map;