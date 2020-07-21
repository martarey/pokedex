import React from 'react';
import { API_URL } from './conf/consts';
import useFetch from './hooks/useFetch';
import 'App.scss';
import List from './components/List';

function App() {
  const { data, loading } = useFetch(API_URL);
  if (loading) {
    return (<p>Cargando Pokemons...</p>);
  }
  return (
    <List data={data.results}  />
  );
}

export default App;
