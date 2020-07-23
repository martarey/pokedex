import React from 'react';
import useLocalData from 'hooks/useLocalData';
import Evolutions from './Evolutions';
import { API_URL } from 'conf/consts';

const Card = ({url}) => {

    let getDataUrl = url;

    if (!url) {
        const location = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        getDataUrl = API_URL + location;
    }

    const { data, loading } = useLocalData(getDataUrl);

    if (loading) {
        return <div className="card">Cargando datos del Pokemon...</div>;
    }

    const getTypes = (types) => types.map((type) => <span className="tag -text-tag" key={type.slot}>{type.type.name}</span>);

    const types = getTypes(data.types);

    return (
        <div className="card -full-screen">
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
