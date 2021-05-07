import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Menu from './containers/Menu';
import Areas from './containers/Areas';
import IngresarItem from './containers/IngresarItem';
import RetirarItem from './containers/RetirarItem';
import Login from './containers/Login';
import Categorias from './containers/Categorias';
import Items from './containers/Items';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/items/:id" component={Items} />
        <Route path="/areas" component={Areas} />
        <Route path="/categorias/:id" component={Categorias} />
        <Route path="/ingresar-item/" component={IngresarItem} />
        <Route path="/retirar-item" component={RetirarItem} />
        <Route path="/" component={Menu} />
      </Switch>
    </Router>
  );
}