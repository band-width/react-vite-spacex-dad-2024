// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import LaunchCard from '../components/LaunchCard';

const Home = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Añade console.log para verificar los datos
        setLaunches(data);
      });
  }, []);

  return (
    <div className="home">
      {launches.map(launch => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  );
};

export default Home;

