import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Col from 'react-bootstrap/lib/Col';

const TopBarContent = props => {
  const classes = cx({
    'top-bar__content--left': props.left,
    'top-bar__content--center': props.center,
    'top-bar__content--right': props.right
  });
  return (
    <Col className={`top-bar__content ${classes}`} {...props}>
      {props.children}
    </Col>
  );
};

TopBarContent.propTypes = {
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

TopBarContent.defaultProps = {
  left: false,
  center: false,
  right: false,
  children: []
};

export default TopBarContent;
