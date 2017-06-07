import React from 'react';
import PropTypes from 'prop-types';

const Avatar = props =>
  <img
    className={`avatar ${props.className}`}
    src={props.src}
    alt={props.altText}
  />;

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  altText: PropTypes.string,
};

export default Avatar;