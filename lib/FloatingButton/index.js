import React from 'react';
import PropTypes from 'prop-types';
import commentSVG from './../../assets/icons/comment.svg';

const FloatingButton = (props) => {
  return (
    <button
      style={props.position}
      className="button button--floating" type="button"
      onClick={props.onClickHandler}
    >
      { props.type === 'comment' && commentSVG() }
    </button>
  );
};

FloatingButton.defaultProps = {
  position: {},
  type: 'comment',
};

FloatingButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  position: PropTypes.shape({}),
  type: PropTypes.string,
};

export default FloatingButton;
