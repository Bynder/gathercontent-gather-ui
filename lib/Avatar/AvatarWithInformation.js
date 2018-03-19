import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Avatar } from '../';

const AvatarWithInformation = props => {
  const additionalClasses = cx("avatar__wrapper avatar__with-text", {
    'avatar--offline': props.isOffline
  });
  return (
    <div className={additionalClasses}>
      <Avatar
        colour={props.color}
        name={props.name}
        url={props.url}
        initials={props.initials}
        isOffline={props.isOffline}
        isHighlighted={props.isHighlighted}
        email={props.email}
      />
      <div className="avatar__information">
        {props.name &&
          <span className="avatar__name">{props.name}</span>
        }

        {props.email &&
          <span className="avatar__email">{props.email}</span>
        }
      </div>
    </div>
  );
}

AvatarWithInformation.defaultProps = {
  className: '',
  colour: '',
  name: '',
  url: '',
  initials: '',
  email: '',
  isOffline: false,
  isHighlighted: false,
};

AvatarWithInformation.propTypes = {
  className: PropTypes.string,
  colour: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  initials: PropTypes.string,
  isOffline: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  email: PropTypes.string,
};

export default AvatarWithInformation;
