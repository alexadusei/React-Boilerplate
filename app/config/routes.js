import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default routes;