import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import TextField from '@mui/material/TextField';
import { default as InfoCard } from '../info-card/index.js'
import './index.css'

const MapComponent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const defaultPosition = {
    lat: 37.773972,
    lng: -122.431297
  };
  const [zoom, setZoom] = useState(10);
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://data.sfgov.org/resource/rqzj-sfat.json').then(res => res.json())
      setData(response);
      setFilteredData(response);
    };

    fetchData();
  }, []);

useEffect(() => {
  const newData = data.filter(item => item.fooditems && item.fooditems.toLowerCase().includes(filter.toLowerCase()));
  setFilteredData(newData);
  setPosition(defaultPosition);
  setZoom(10);
  setSelectedMarker(null);
}, [filter])

  return (
    <div>
      <TextField
      className='input'
          placeholder='Filter by food type'
          onChange={e => setFilter(e.target.value)}
        />
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}>
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: "400px",
            width: "100%"
          }}
          zoom={zoom}
          center={position}
        >
          {filteredData && filteredData.map((item, index) => (
            <Marker key={index} position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} onClick={() => {
              setZoom(15)
              setPosition({ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) })
              setSelectedMarker(item)}}/>
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedMarker &&
          <InfoCard data={selectedMarker} />}
    </div>
  );
};

export default MapComponent;