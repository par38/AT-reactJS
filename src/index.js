
// / "Route" générale : map sur routes.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';

import routes from './routes';

ReactDOM.render(
  <Router>
    <Switch>

      {/* /// EXACT match with /details /details/ /details/... */}
      {/* /// don't use STRICT, who will match only with /details */}
      {routes.map(({ path, component }) => (
        <Route
          exact path={path}
          key={path}
          component={component}
        />

      ))}

      {/* // / erreur 404 si pas exactement = à "path" */}
      <Route
        exact path="/*"
        render={() => <h3>404</h3>}
      />

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
