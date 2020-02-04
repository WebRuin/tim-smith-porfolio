import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ExternalLink = props => (
  <Link href="{props.link}">
    <a target="_blank">
      <FontAwesomeIcon icon={faLink} /> {props.desc}
    </a>
  </Link>
);

export default ExternalLink;
