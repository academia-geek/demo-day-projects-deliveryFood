import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'; 
import { Marker } from '@react-google-maps/api';
import iconRestaurant from '../assets/restaurante.png'

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 6.248981431304979,
  lng: -75.58052485631599
};
export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA6YHrzKAkEgvk-wjz7yM3YFqNvC5eS6Dc"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    <Marker 
      position={{
      lat: 6.251434869268738,
      lng: -75.5656475987859
      }}
      // label={'Restaurante doña pepa'}
      onMouseOver={()=>{
        alert('Restaurant tal')
      }}
      icon={iconRestaurant}
     />

      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}
