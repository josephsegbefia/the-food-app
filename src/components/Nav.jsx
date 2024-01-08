import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className= "title is-size-6 has-text-primary">THE FOOD APP</h1>
        </div>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            Home
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary">
                <strong>Sign up</strong>
              </div>
              <div className="button is-light">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
