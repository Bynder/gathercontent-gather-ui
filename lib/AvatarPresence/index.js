import React from 'react';
import PropTypes from 'prop-types';

const AvatarPresence = props => {
  const styles = {
    backgroundColor: props.colour,
    zIndex: props.index,
  };
  const styleClass = props.fadedOut ? 'is-faded' : '';
  return (
    <div className={`avatar avatar--presence ${props.className} ${styleClass}`} style={styles}>
        { props.onlyInitials &&
          <div className="avatar__wrapper">
            <span className="avatar__initials">{props.initials}</span>
          </div>
        }
        { props.url && !props.onlyInitials &&
          <img className="avatar__image" src={props.url} alt={props.label} />
        }
      </div>
  );
};

AvatarPresence.defaultProps = {
  className: '',
  colour: 'rebeccapurple',
  fadedOut: false,
};

AvatarPresence.propTypes = {
  className: PropTypes.string,
  initials: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
};

export default AvatarPresence;