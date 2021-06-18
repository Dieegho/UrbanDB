import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import './App.global.css';

import Menu from './containers/Menu';
import Areas from './containers/Areas';
import IngresarItem from './containers/IngresarItem';
import NuevoItem from './containers/NuevoItem';
import RetirarItem from './containers/RetirarItem';
import Login from './containers/Login';
import Categorias from './containers/Categorias';
import Items from './containers/Items';
import ResultadosBusqueda from './containers/ResultadosBusqueda/ResultadosBusqueda';
import Movimientos from './containers/Movimientos';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/items/:id" component={Items} />
        <Route path="/areas" component={Areas} />
        <Route path="/categorias/:id" component={Categorias} />
        <Route path="/ingresar-item/" component={IngresarItem} />
        <Route path="/nuevo-item/" component={NuevoItem} />
        <Route path="/retirar-item" component={RetirarItem} />
        <Route path="/resultados-busqueda/:filter" component={ResultadosBusqueda} />
        <Route path="/movimientos/" component={Movimientos}/>
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  );
}