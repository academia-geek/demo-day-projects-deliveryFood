import { useState, useMemo, useRef, useCallback } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useHandleUser } from "../context/HandleUserContext";
import { MarketIcon } from "./MarketIcon";

import "../styles/mapContainer.css";

// google.maps.LatLngLiteral
// google.maps.DirectionsResults
// google.maps.MapOptions

export const Maps = () => {
  const [establecimiento, setEstablecimiento] = useState();
  const mapRef = useRef();
  const { userUbication } = useHandleUser();
  const center = useMemo(
    () => ({
      lat: userUbication.latitude,
      lng: userUbication.longitude,
    }),
    [userUbication.latitude, userUbication.longitude]
  );

  const options = {
    disableDefaultUI: false,
    clickableIcons: false,
  };
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const restaurants = useMemo(() => generatesRestaurant(center), [center]);

  return (
    <div className="container">
      <div className="map">
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {userUbication.latitude && userUbication.longitude && (
            <>
              <Marker position={center} />

              {restaurants.map((house) => (
                <Marker
                  key={house.lat}
                  position={house}
                  icon={
                    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                  }
                />
              ))}

              <Circle center={center} radius={1200} options={closeOptions} />
              <Circle center={center} radius={3000} options={middleOptions} />
              <Circle center={center} radius={6000} options={farOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

const generatesRestaurant = (position) => {
  const restaurants = [];
  for (let i = 0; i < 15; i++) {
    const direction = Math.random() < 0.5 ? -70 : 15;
    restaurants.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return restaurants;
};
