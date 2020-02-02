import React from "react";

import "../scss/nav.scss";

const Nav = () => (
  <nav className="navigation" aria-role="navigation">
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

export default Nav;
