import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const styleClass = props.fadedOut ? 'is-faded' : '';
  const styles = {
    backgroundColor: props.colour,
    zIndex: props.index,
  };

  return (
    <div style={styles} className={`avatar ${props.className} ${styleClass}`}>
      { props.onlyInitials &&
        <div className="avatar__wrapper">
          <span className="avatar__initials">{props.initials}</span>
        </div>
      }
      { props.url && !props.onlyInitials && !props.fadedOut &&
        <img className="avatar__image" src={props.url} alt={props.name} />
      }
    </div>
  );
};

Avatar.defaultProps = {
  className: '',
  onlyInitials: false,
  colour: 'rebeccapurple',
  name: '',
  index: 0,
  fadedOut: false,
  isAssigned: false,
  url: null,
  initials: null,
};

Avatar.propTypes = {
  colour: PropTypes.string,
  className: PropTypes.string,
  onlyInitials: PropTypes.bool,
  index: PropTypes.number,
  initials: PropTypes.string,
  url: PropTypes.string,
  fadedOut: PropTypes.bool,
};

export default Avatar;
