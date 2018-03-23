import React from 'react';
import PropTypes from 'prop-types';

const AvatarInformation = props => (
  <div className={`avatar__information ${props.className}`}>
    {props.name && <span className="avatar__name">{props.name}</span>}

    {props.email && <span className="avatar__email">{props.email}</span>}
  </div>
);

AvatarInformation.defaultProps = {
  className: '',
  name: '',
  email: ''
};

AvatarInformation.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string
};

export default AvatarInformation;
