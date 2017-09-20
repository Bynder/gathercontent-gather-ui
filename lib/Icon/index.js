import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import caretSVG from '../../assets/icons/caret.svg';
import plusSVG from '../../assets/icons/plus.svg';
import menuSVG from '../../assets/icons/menu.svg';
import loaderSVG from './../../assets/icons/loader.svg';
import tickSVG from './../../assets/icons/tick.svg';
import menuDottedSVG from './../../assets/icons/menu-dotted.svg';
import backArrowSVG from './../../assets/icons/back-arrow.svg';
import pencilSVG from './../../assets/icons/pencil.svg';
import uploadSVG from './../../assets/icons/upload.svg';
import trashSVG from './../../assets/icons/trash.svg';
import fullScreenSVG from './../../assets/icons/fullscreen.svg';
import downloadSVG from './../../assets/icons/download.svg';

/**
 * @usage
 *
 * <Icon name="comment" size="small" />
 */
const getIcon = (name) => {
  const icons = {
    comment: commentSVG,
    plusCircle: plusCircleSVG,
    plus: plusSVG,
    caret: caretSVG,
    menu: menuSVG,
    menuDotted: menuDottedSVG,
    loader: loaderSVG,
    tick: tickSVG,
    backArrow: backArrowSVG,
    pencil: pencilSVG,
    upload: uploadSVG,
    trash: trashSVG,
    fullScreen: fullScreenSVG,
    download: downloadSVG,
  };

  return icons[name];
};

const Icon = (props) => {
  const icon = getIcon(props.name)();
  const classNames = cx(props.className, {
    'icon--hide-text': props.hideText,
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
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  hideText: PropTypes.bool,
};

export default Icon;
