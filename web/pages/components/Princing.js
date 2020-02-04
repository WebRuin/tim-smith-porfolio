import Link from 'next/link';

import '../scss/_typography.scss';
import '../scss/main.scss';
import ExternalLink from './ExternalLink';

const Pricing = () => (
  <section id="pricing">
    <h4 className="section-header">Pricing</h4>
    <p>
      I keep pricing{' '}
      <span>
        <i>really</i>
      </span>{' '}
      simple. I base my pricing on
      <span>$60</span>/hour for larger projects and an agreed upon flat rate for
      small projects. I like to sit down and talk to you about your idea and
      help guide you to the right solution for your project. The price will be
      loosely based on the amount of time I estimate it will take me to complete
      work and on larger projects, I will plan checkpoints based on project
      goals.
    </p>
    <p>
      <span>What is a "small" project?</span>
      <br />I define a small project as a website that does not require a CMS
      (Wordpress, Joomla!, Drupal, etc) or a backend server. <span>
        Wow,
      </span>{' '}
      that was a confusing sentence! Put simply, a small project is a website
      with less than 10 pages.
    </p>
    <p>
      <span>What is a "large" project?</span>
      <br />A large project could be a blog, a website with more that 10 pages,
      or an app. In most cases, a large site will be a CMS and unless you have a
      preference, I use <ExternalLink link="//wordpress.org" desc="WordPress" />
      for that.
    </p>
  </section>
);

export default Pricing;
