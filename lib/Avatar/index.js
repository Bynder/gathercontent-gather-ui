import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @usage
 *
 * <Avatar initials="MR" color="green" url="img/url" onlyInitials isHighlighted fadedOut />
 */
const Avatar = (props) => {
  const styleClass = cx({
    'is-faded': props.fadedOut,
    'is-highlighted': props.isHighlighted,
  });

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
  colour: 'rgb(60, 50, 60)',
  name: '',
  index: 0,
  fadedOut: false,
  isHighlighted: false,
  url: null,
  initials: null,
};

Avatar.propTypes = {
  colour: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onlyInitials: PropTypes.bool,
  index: PropTypes.number,
  initials: PropTypes.string,
  url: PropTypes.string,
  fadedOut: PropTypes.bool,
  isHighlighted: PropTypes.bool,
};

export default Avatar;
