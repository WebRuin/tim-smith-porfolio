import React from 'react';

import '../scss/nav.scss';

class Nav extends React.Component {
  componentDidMount() {
    const nav = document.querySelector('.navigation');
    const navToggle = document.querySelector('.menu-toggle');
    const menuToggle = document.querySelector('.menu-toggle');

    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
    });
  }

  render() {
    return (
      <nav className="navigation" role="navigation" aria-label="Main">
        <ul>
          <li>
            <a className="menu1" href="#top">
              Top
            </a>
          </li>
          <li>
            <a className="menu2" href="#recent-work">
              Recent Work
            </a>
          </li>
          <li>
            <a className="menu3" href="#why-hire-me">
              Why Hire Me?
            </a>
          </li>
          <li>
            <a className="menu4" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="menu5" href="#accolades">
              Accolades
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
