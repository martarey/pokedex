import React from 'react';
import { API_URL } from './conf/consts';
import useFetch from './hooks/useFetch';
import 'App.scss';
import CardContainer from './components/CardContainer';

function App() {
  const { data, loading } = useFetch(API_URL);
  if (loading) {
    return (<p>Cargando Pokemons...</p>);
  }
  return (
    <CardContainer data={data.results}  />
  );
}

export default App;
