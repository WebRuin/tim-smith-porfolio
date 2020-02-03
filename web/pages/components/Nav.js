import React from 'react';
import Link from 'next/link';

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
          <li className="menu1">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="menu2">
            <a href="#top">Top</a>
          </li>
          <li className="menu3">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="menu4">
            <a href="#recent-work">Recent Work</a>
          </li>
          <li className="menu5">
            <a href="#why-hire-me">Why Hire Me?</a>
          </li>
          <li className="menu6">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="menu7">
            <a href="#accolades">Accolades</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
