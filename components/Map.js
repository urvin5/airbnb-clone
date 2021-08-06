import { getCenter } from "geolib";
import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export function Map({ searchResults }) {
  const coordinates = searchResults.map((el) => {
    return { longitude: el.long, latitude: el.lat };
  });
  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });
  const [selectedLocation, setSelectedLocation] = React.useState();

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/urvin5/cks0i8j733pgw17pelo3s5gts"}
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer animate-bounce text-2xl"
              aria-label="push-pin"
              role="img"
              onClick={() => setSelectedLocation(result)}
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.long === result.long ? (
            <Popup
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
