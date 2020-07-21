import React, { useEffect, useState } from 'react';
import Card from './Card';


const List = ({data}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [data, searchTerm]);
    
    return (
        <div className="o-grid">
            <input
                type="text"
                placeholder="Filtra Pokemons por nombre..."
                value={searchTerm}
                onChange={handleChange}
                className="o-grid--avoid-cols filter"
            />
            {searchResults.map((item) => (
                <Card item={item} key={item.name} />
            ))}
        </div>
    );
} 

export default List;
