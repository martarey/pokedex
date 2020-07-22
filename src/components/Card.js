import React, { useState } from 'react';
import useLocalData from 'hooks/useLocalData';
import Evolutions from './Evolutions';

const Card = ({item}) => {

    const { data, loading } = useLocalData(item.url);

    const [active, setActive] = useState(false);

    if (loading) {
        return <div className="card">Cargando datos del Pokemon...</div>;
    }

    const getTypes = (types) => types.map((type) => <span className="tag -text-tag" key={type.slot}>{type.type.name}</span>);

    const types = getTypes(data.types);

    const handleState = () => { setActive(!active) };

    const classActive = active ? 'is-active' : '';

    return (
        <div
            onClick={handleState}
            className={`card -full-screen ${classActive}` }
        >
            <figure className="card__figure">
                <img
                    src={data.sprites.front_default}
                    alt={data.name}
                    className="card__img"
                />
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
