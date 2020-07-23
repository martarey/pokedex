import React, { useEffect, useState } from 'react';


const Filter = ({data, setResults}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(results);
    }, [data, searchTerm, setResults]);
    
    return (
        <input
            type="text"
            placeholder="Filtra Pokemons por nombre..."
            value={searchTerm}
            onChange={handleChange}
            className="o-grid--avoid-cols filter"
        />
    );
} 

export default Filter;
