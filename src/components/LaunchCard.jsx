import React from 'react';
import { Link } from 'react-router-dom';

const LaunchCard = ({ launch }) => {
  return (
    <div className="launch-card">
      <h2>{launch.name}</h2>
      <Link to={`/launch/${launch.id}`}>
        <img src={launch.links.patch.small} alt={launch.name} />
      </Link>
    </div>
  );
};

export default LaunchCard;
