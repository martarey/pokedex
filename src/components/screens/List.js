import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';

const List = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [data, searchTerm]);

  return (
    <div className="o-grid o-grid--3c">
      <input
        type="text"
        placeholder="Filtra Pokemons por nombre..."
        value={searchTerm}
        onChange={handleChange}
        className="o-grid--avoid-cols filter"
      />
      {searchResults.map((item) => (
        <Link
          to={{
            pathname: `/${item.name}`,
            url: item.url,
          }}
          key={item.name}
        >
          <Card url={item.url} />
        </Link>
      ))}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List;
