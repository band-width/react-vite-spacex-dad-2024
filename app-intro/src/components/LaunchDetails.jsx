import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LaunchDetails = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v5/launches/${id}`)
      .then(response => response.json())
      .then(data => setLaunch(data));
  }, [id]);

  if (!launch) {
    return <p>Loading...</p>;
  }

  return (
    <div className="launch-details">
      <h2>{launch.name}</h2>
      <img src={launch.links.patch.small} alt={launch.name} />
      {launch.failures.length > 0 && (
        <div>
          <h3>Failures:</h3>
          <ul>
            {launch.failures.map((failure, index) => (
              <li key={index}>{failure.reason}</li>
            ))}
          </ul>
        </div>
      )}
      <p><strong>Details:</strong> {launch.details ? launch.details : 'No datails available'}</p>
      <p><strong>Flight number:</strong> {launch.flight_number}</p>
      <p><strong>Launch date:</strong> {new Date(launch.date_utc).toLocaleString()}</p>
    </div>
  );
};

export default LaunchDetails;

