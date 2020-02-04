import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import ExternalLink from '../components/ExternalLink';

import '../scss/_typography.scss';
import '../scss/main.scss';

const Accolades = () => (
  <section id="accolades">
    <h4 className="section-header">Accolades</h4>
    <p>Here are a few publish works and honors in web development</p>
    <ExternalLink
      link="//css-tricks.com/hmtl-css-and-js-in-an-add-ocd-bi-polar-dyslexic-and-autistic-world/"
      desc="HTML, CSS and JS in an ADD, OCD,
    Bi-Polar, Dyslexic and Autistic World"
    />
  </section>
);

export default Accolades;
