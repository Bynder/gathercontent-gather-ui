import React from 'react';
import PropTypes from 'prop-types';
import logoSVG from '../../assets/logo.svg';

/**
 * @usage
 *
 * <Branding url="http://example.com/myimage.png" alt="Alt Tag" />
 */

const Branding = props => {
  const image = props.url ? (
    <img src={props.url} alt={props.alt} className="branding__image" />
  ) : (
    <span className="branding__image">{logoSVG()}</span>
  );

  return <span className="branding">{image}</span>;
};

Branding.defaultProps = {
  url: '',
  alt: 'GatherContent Logo'
};

Branding.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
};

export default Branding;
