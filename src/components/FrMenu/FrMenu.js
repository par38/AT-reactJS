import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import routes from '../../routes';

// import Logo from '.'

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
            {routes.filter(elem => !elem.path.includes('/details') && !elem.path.includes('/admin') && elem.name != null)
              .map(prop => (

              <li>
                <NavLink
                  className="waves-effect"
                  exact
                  to={prop.path}
                  key={prop.path}
                  activeClassName="active"
                  activeStyle={{ color: 'LightGray' }}
                >
                  {prop.name}
                </NavLink>
              </li>
            ))}
          </ul>
            

          <a href="/home" data-target="slide-out" class="sidenav-trigger right">
            <i class="material-icons">menu</i>
          </a>


      </div>

    )
  }
}

export default FrMenu;