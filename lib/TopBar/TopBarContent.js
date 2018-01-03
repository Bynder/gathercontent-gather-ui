import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Col from 'react-bootstrap/lib/Col';

const TopBarContent = ({ left, center, right, ...props }) => {
  const classes = cx('top-bar__content', {
    'top-bar__content--left': left,
    'top-bar__content--center': center,
    'top-bar__content--right': right
  });
  return (
    <Col className={classes} {...props}>
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
