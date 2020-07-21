import React from 'react';
import useFetch from '../hooks/useFetch';
import Evolutions from './Evolutions';

const Card = ({item}) => {

    const { data, loading } = useFetch(item.url);

    if (loading) {
        return <p>Cargando datos del Pokemon...</p>
    }

    const getTypes = (types) => types.map((type) => <span className="tag -text-tag" key={type.slot}>{type.type.name}</span>);

    const types = getTypes(data.types);

    return (
        <div className="card">
            <figure className="card__figure">
                <img src={data.sprites.front_default} alt={data.name} className="card__img" />
                <figcaption className="card__caption badge -text-tag">ID / {data.id}</figcaption>
            </figure>
            <div className="card__content">
                <h2 className="card__title">{data.name}</h2>
                <p className="card__tags">{types}</p>
                <Evolutions url={data.species.url} />
            </div>
        </div>
    );
};

export default Card;
