import React from 'react';
import useLocalData from 'hooks/useLocalData';

const Evolutions = ({url}) => {

    const { data, loading } = useLocalData(url);

    if (loading) {
        return <p>Cargando evoluciones...</p>
    }
    return (
        <>
            {data.evolves_from_species
            ? <h3 className="card__extra -font-light">Evoluciona de:
                <span className="o-heading--h2 card__extra--ft">{data.evolves_from_species.name}</span>
            </h3>
            : null}
        </>
    );
};

export default Evolutions;
