import React from 'react';
import { API_URL } from './conf/consts';
import useLocalData from './hooks/useLocalData';
import 'App.scss';
import List from './components/List';

function App() {
  const { data, loading } = useLocalData(API_URL);

  if (loading) {
    return (<p>Cargando Pokemons...</p>);
  }

  return (
    <List data={data.results}  />
  );
}

export default App;
