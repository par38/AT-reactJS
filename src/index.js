
// / "Route" générale : map sur routes.jsx
// / erreur 404 si pas exactement = à "path"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';

import routes from './routes';

// import './components/FrHome/FrHome.js'
// import PageFrHome from './pages/PageFrHome';
// import PageFrProjects from './pages/PageFrProjects';
// import PageFrProjectDetail from './pages/PageFrProjectDetail'
//import { Switch } from '@material-ui/core';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component: C }) => (
        <Route
          exact path={path}
          key={path}
          render={props => <C {...props} />} 
        />
      ))}
      <Route
          exact path="/*"
          render={() => <h3>404</h3>}
        />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
