import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @usage
 *
 * <Avatar initials="MR" color="green" url="img/url" onlyInitials isHighlighted offline />
 */
const Avatar = props => {
  const offlineBg = Avatar.defaultProps.colour;
  const displayImage = props.url && !props.onlyInitials && !props.offline;
  const displayGreyedImage = props.url && props.offline;
  const backgroundColor = props.offline ? offlineBg : props.colour;

  const styles = {
    backgroundColor: !displayGreyedImage ? backgroundColor : 'transparent'
  };

  const styleClass = cx({
    'is-highlighted': props.isHighlighted,
    'is-offline': props.offline,
    'has-image': displayImage || displayGreyedImage
  });

  return (
    <div style={styles} className={`avatar ${props.className} ${styleClass}`}>
      {(props.onlyInitials || !props.url) && (
          <div className="avatar__wrapper">
            <span className="avatar__initials">{props.initials}</span>
          </div>
        )}
      {displayImage && (
        <img className="avatar__image" src={props.url} alt={props.name} />
      )}

      {displayGreyedImage && (
        <img
          className="avatar__image avatar__image--offline"
          src={props.url}
          alt={props.name}
        />
      )}
    </div>
  );
};

Avatar.defaultProps = {
  className: '',
  onlyInitials: false,
  colour: 'rgb(60, 50, 60)',
  name: '',
  index: 0,
  offline: false,
  isHighlighted: false,
  url: null,
  initials: null
};

Avatar.propTypes = {
  colour: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onlyInitials: PropTypes.bool,
  initials: PropTypes.string,
  url: PropTypes.string,
  offline: PropTypes.bool,
  isHighlighted: PropTypes.bool
};

export default Avatar;
