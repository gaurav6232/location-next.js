"use client"; // Add this at the top to make this a client component

import React, { useEffect, useRef } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      // Initialize the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
        zoom: 12,
      });
    }
  }, []);

  return (
    <div>
      {/* Google Places Autocomplete Input */}
      <GooglePlacesAutocomplete
        selectProps={{
          onChange: (place) => {
            console.log(place); // Selected place details
          },
        }}
      />

      {/* Google Map Display */}
      <div
        ref={mapRef}
        style={{
          height: '400px',
          width: '100%',
          marginTop: '20px',
        }}
      ></div>
    </div>
  );
};

export default GoogleMap;
