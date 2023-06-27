import React from 'react';
import { string, func, oneOfType } from 'prop-types';
import logoSVG from '../../assets/logo.svg';

/**
 * @usage
 *
 * <Logo url="http://example.com/myimage.png" alt="Alt Tag" />
 */

const Logo = props => {
  const LogoPath = props.url || logoSVG;
  const image =
    typeof LogoPath === 'string' ? (
      <img src={props.url} alt={props.alt} className="logo__image" />
    ) : (
      <span className="logo__image">
        <LogoPath />
      </span>
    );
  return <span className="logo">{image}</span>;
};

Logo.defaultProps = {
  url: '',
  alt: 'GatherContent Logo'
};

Logo.propTypes = {
  url: oneOfType([string, func]),
  alt: string
};

export default Logo;
