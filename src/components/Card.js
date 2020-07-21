import React from 'react';
import useFetch from '../hooks/useFetch';
import Evolutions from './Evolutions';

const Card = ({item}) => {

    const { data, loading } = useFetch(item.url);

    if (loading) {
        return <p>Cargando datos del Pokemon...</p>
    }

    const getTypes = (types) => types.map((type) => <span key={type.slot}>{type.type.name}</span>);

    const types = getTypes(data.types);

    return (
        <div>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>{data.id}</p>
            <h2>{data.name}</h2>
            <p>{types}</p>
            <Evolutions url={data.species.url} />
        </div>
    );
};

export default Card;
