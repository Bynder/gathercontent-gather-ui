import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @usage
 *
 * <Avatar name="Seymour Butts" color="green" url="img/url" offline />
 */
const getInitialsFromName = name => {
  const names = name.split(' ');
  return names.reduce((acc, value) => `${acc}${value.split('')[0]}`, '');
};

const createBoxShadowStyle = colour => ({
  boxShadow: `0 0 0 2px white, 0 0 0 3px ${colour}, 0 0 0 5px white`
});

const Avatar = props => {
  const styles = props.colour ? createBoxShadowStyle(props.colour) : {};

  const styleClass = cx({
    'avatar--highlighted': props.isHighlighted,
    'avatar--offline': props.isOffline
  });

  return (
    <div style={styles} className={`avatar ${props.className} ${styleClass}`}>
      {!props.url && (
        <span className="avatar__initials">
          {getInitialsFromName(props.name)}
        </span>
      )}

      {props.url && (
        <img className="avatar__image" src={props.url} alt={props.name} />
      )}
    </div>
  );
};

Avatar.defaultProps = {
  className: '',
  colour: '',
  name: '',
  url: '',
  isOffline: false,
  isHighlighted: false
};

Avatar.propTypes = {
  className: PropTypes.string,
  colour: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  isOffline: PropTypes.bool,
  isHighlighted: PropTypes.bool
};

export default Avatar;
