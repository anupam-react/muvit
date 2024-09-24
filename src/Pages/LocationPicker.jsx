import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, StandaloneSearchBox } from '@react-google-maps/api';

// Inline style for Google Map container
const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

// Default center location
const defaultCenter = {
  lat: 28.39,
  lng: 77.13,
};

export const LocationPicker = ({ onLocationSelect }) => {
  const [location, setLocation] = useState(defaultCenter);
  const [address, setAddress] = useState('');
  const searchBoxRef = useRef(null);
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:  'AIzaSyAxvv_NnQpCjr0n4J1zSomdYInOmvoKOjc', // Your API key here
    libraries: ['places'], // Load Places library
  });

  // Geocode latitude and longitude to get address
  const geocodeLatLng = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress('No address found');
        }
      } else {
        setAddress('Geocoder failed due to: ' + status);
      }
    });
  };

  // Handle map click
  const onMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setLocation({ lat, lng });
    geocodeLatLng(lat, lng);
  }, []);

  // Handle place selection from the search box
  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setLocation({ lat, lng });
      geocodeLatLng(lat, lng);
      mapRef.current.panTo({ lat, lng });
    }
  };

  // Confirm selected location and address
  const handleConfirmLocation = () => {
    onLocationSelect({ location, address });
  };

  return isLoaded ? (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
      {/* Search Box */}
      <div style={{ marginBottom: '10px' }}>
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for places..."
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </StandaloneSearchBox>
      </div>

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
        onClick={onMapClick}
        onLoad={(map) => (mapRef.current = map)}
      >
        {/* Marker on the selected location */}
        <Marker position={location} />
      </GoogleMap>

      {/* Selected Address */}
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Selected Address: {address || "Click on the map or search to select a location"}
      </p>

      {/* Confirm Button */}
      <button
        onClick={handleConfirmLocation}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Confirm Location
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

