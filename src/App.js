import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { API_URL } from './conf/consts';
import useLocalData from './hooks/useLocalData';
import List from './components/screens/List';
import Detail from './components/screens/Detail';
import 'App.scss';

function App() {
  const { data, loading } = useLocalData(API_URL);

  if (loading) {
    return (<p>Cargando Pokemons...</p>);
  }

  return (
    <div className="o-frame">
      <div className="o-frame__top"></div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={(props) => <List {...props} data={data.results} />} />
          <Route path="/:name" component={Detail} />
        </Switch>
      </Router>
      <div className="o-frame__bottom"></div>
    </div>
  );
}

export default App;
