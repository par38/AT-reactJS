import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import routes from '../../routes';

import './FrMenu.css'

class FrMenu extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');

    M.Sidenav.init(elems, {
      edge: "right",
      inDuration: 250,
      outDuration: 200
    });
  }

  render() {
    return (
      <div>
        <ul className="sidenav" id="slide-out">

          {/* // / no /details, /admin or null in the sidenav */}
          {routes
            .filter(elem =>
              !elem.path.includes('/details') && !elem.path.includes('/admin') &&
              elem.name != null
            )

            .map(prop => (

              <li key={prop.path}>
                <NavLink
                  className="waves-effect sidenav-close"
                  exact
                  to={prop.path}
                  activeClassName="active"
                  activeStyle={{ color: 'LightGray' }}
                >
                  {prop.name}
                </NavLink>
              </li>
            ))
          }
        </ul>


        <a href="/home" data-target="slide-out" className="sidenav-trigger fixed-menu right">
          <i className="material-icons">menu</i>
        </a>

      </div>

    )
  }
}

export default FrMenu;