import React from 'react';
import PropTypes from 'prop-types';
import logoSVG from '../../assets/logo.svg';

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

const Logo = props => {
  const image = props.url ? (
    <img src={props.url} alt={props.alt} className="logo__image" />
  ) : (
    <span className="logo__image">{logoSVG()}</span>
  );

  return <span className="logo">{image}</span>;
};

Logo.defaultProps = {
  url: '',
  alt: 'GatherContent Logo'
};

Logo.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
};

export default Logo;
