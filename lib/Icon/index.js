import React from 'react';
import PropTypes from 'prop-types';
import commentSVG from '../../assets/icons/comment.svg';
import plusSVG from '../../assets/icons/plus.svg';

/**
 * @usage
 *
 * <Icon name="comment" />
 */
const getIcon = (name) => {
  const icons = {
    comment: commentSVG,
    plus: plusSVG,
  };

  return icons[name];
};

const Icon = (props) => {
  const icon = getIcon(props.name)();
  const hideTextClass = (props.hideText) ? 'icon--hide-text' : '';

  return (
    <span className={`icon icon--${props.name} ${hideTextClass}`} aria-hidden="true">
      <span className="icon__body">
        <span className="icon__image">{icon}</span>
        { props.text &&
          <span className="icon__text">{props.text}</span>
        }
      </span>
    </span>
  );
};

Icon.defaultProps = {
  hideText: false,
  text: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  hideText: PropTypes.bool,
};

export default Icon;
