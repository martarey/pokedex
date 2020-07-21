import React from 'react';
import useFetch from '../hooks/useFetch';

const Evolutions = ({url}) => {

    const { data, loading } = useFetch(url);

    if (loading) {
        return <p>Cargando evoluciones...</p>
    }
    return (
        <>
            {data.evolves_from_species
            ? <p>Evoluciona de {data.evolves_from_species.name}</p>
            : null}
        </>
    );
};

export default Evolutions;
