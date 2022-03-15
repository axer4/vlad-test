import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useRef } from 'react';
import './Maps.css';
import Media from 'react-media';
const API_KEY = process.env.REACT_APP_API_KEY;
const containerStyle = {
  width: '768px',
  height: '358px'
};
const containerMobileStyle = {
  width: '310px',
  height: '310px'
}

const center = {
  lat: 59.943168,
  lng: 30.338684
};
function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${API_KEY}`
  })
  const mapRef = useRef(undefined)
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])
  return (
    <div className='maps'>
      <h2 className='maps-heading heading-second-level'>Район на карте</h2>
        <div className='maps-google_map'>
         <Media query="(min-width: 768px)"
        render={() => <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>}
      />
      <Media query="(max-width: 767.5px)"
        render={() => <GoogleMap
          mapContainerStyle={containerMobileStyle}
          center={center}
          zoom={18}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>}
      />
      </div>
    </div>
  )
}
export default Maps;