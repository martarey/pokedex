import React from 'react';
import { API_URL } from './conf/consts';
import useFetch from './hooks/useFetch';
import 'App.scss';

function App() {
  const { data, loading } = useFetch(API_URL);
  if (loading) {
    return (<p>Cargando Pokemons...</p>);
  }
  console.log(data);
  return (
    <h1>Hola, Mundo</h1>
  );
}

export default App;
