import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

import '../scss/header.scss';

class Header extends React.Component {
  // componentWillMount() {
  //   const toggle = document.querySelector('.toggle');
  //   const body = document.querySelector('body');
  //   const moon = document.querySelector('.moon');
  //   const sun = document.querySelector('.sun');

  //   const today = new Date().getHours();

  //   if (today >= 6 && today <= 19) {
  //   } else {
  //     body.classList.toggle('dark');
  //     toggle.classList.toggle('dark-moon');
  //     moon.classList.toggle('hide');
  //     sun.classList.toggle('hide');
  //   }

  //   toggle.addEventListener('click', () => {
  //     body.classList.toggle('dark');
  //     toggle.classList.toggle('dark-moon');
  //     moon.classList.toggle('hide');
  //     sun.classList.toggle('hide');
  //   });
  // }

  componentDidMount() {
    const toggle = document.querySelector('.toggle');
    const body = document.querySelector('body');
    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');

    const today = new Date().getHours();

    if (today >= 6 && today <= 19) {
    } else {
      body.classList.toggle('dark');
      toggle.classList.toggle('dark-moon');
      moon.classList.toggle('hide');
      sun.classList.toggle('hide');
    }

    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggle.classList.toggle('dark-moon');
      moon.classList.toggle('hide');
      sun.classList.toggle('hide');
    });
  }

  render() {
    return (
      <header id="top" className="header" role="banner">
        <div className="toggle">
          <button role="button" aria-pressed="false">
            <FontAwesomeIcon className="moon" icon={faMoon} />
          </button>
          <button role="button" aria-pressed="false">
            <FontAwesomeIcon className="sun hide" icon={faSun} />
          </button>
        </div>
        <div className="menu-toggle">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <h1>Tim Smith</h1>
        <h2>Front-End Web Developer</h2>
        <Nav />
      </header>
    );
  }
}

export default Header;
