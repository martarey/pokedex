import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../UI/Card';

const Detail = () => {
  const Location = useLocation();

  return (
    <div className="o-grid">
      <Link to="/">
        <Card url={Location.url} />
      </Link>
    </div>
  );
};

export default Detail;
