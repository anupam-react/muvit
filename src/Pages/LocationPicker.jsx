import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const defaultCenter = {
  lat: 28.39,
  lng: 77.13,
};

export const LocationPicker = ({ onLocationSelect }) => {
  const [location, setLocation] = useState(defaultCenter);
  const [address, setAddress] = useState('');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAxvv_NnQpCjr0n4J1zSomdYInOmvoKOjc", // Your API key here
  });

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

  const onMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setLocation({ lat, lng });
    geocodeLatLng(lat, lng);
  }, []);

  const handleConfirmLocation = () => {
    // Pass both location (lat/lng) and address back to parent
    onLocationSelect({ location, address });
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
        onClick={onMapClick}
      >
        {/* Marker on the selected location */}
        <Marker position={location} />
      </GoogleMap>

      <div className="mt-4">
        <p><strong>Selected Address:</strong> {address || "Click on the map to select a location"}</p>
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
    </div>
  ) : (
    <p>Loading...</p>
  );
};