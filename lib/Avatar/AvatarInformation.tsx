import React from 'react';
import PropTypes from 'prop-types';

const AvatarInformation = (props: any) => <div className={`avatar__information ${props.className}`}>
  {props.name && <span className="avatar__name">{props.name}</span>}

  {props.email && (
    <span className="avatar__email" title={props.email}>
      {props.email}
    </span>
  )}
  {props.actions && <span className="avatar__actions">{props.actions}</span>}
</div>;

AvatarInformation.defaultProps = {
  className: '',
  name: '',
  email: '',
  actions: null
};

AvatarInformation.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  email: PropTypes.string,
  actions: PropTypes.node
};

export default AvatarInformation;
