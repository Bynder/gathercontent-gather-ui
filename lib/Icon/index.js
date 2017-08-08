import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import caretSVG from '../../assets/icons/caret.svg';
import plusSVG from '../../assets/icons/plus.svg';

/**
 * @usage
 *
 * <Icon name="comment" />
 */
const getIcon = (name) => {
  const icons = {
    comment: commentSVG,
    plusCircle: plusCircleSVG,
    plus: plusSVG,
    caret: caretSVG,
  };

  return icons[name];
};

const Icon = (props) => {
  const icon = getIcon(props.name)();
  const classNames = cx({
    'icon--micro': props.size === 'micro',
    'icon--small': props.size === 'small',
    'icon--minor': props.size === 'minor',
    'icon--hide-text': props.hideText,
    'icon--interactive': props.isInteractive,
  });

  return (
    <span className={`icon icon--${props.name} ${classNames}`}>
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
  isInteractive: false,
  size: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  size: PropTypes.string,
  hideText: PropTypes.bool,
  isInteractive: PropTypes.bool,
};

export default Icon;
