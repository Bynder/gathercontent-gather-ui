import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import cx from 'classnames';

const MessageBar = props => {
  const classes = cx('message-bar', {
    [`message-bar__${props.type}`]: props.type,
    'message-bar__fixed': props.fixed
  });

  return (
    <Grid className={classes} fluid>
      <Row className="message-bar__inner">{props.children}</Row>
    </Grid>
  );
};

MessageBar.propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  type: PropTypes.string
};

MessageBar.defaultProps = {
  fixed: false,
  children: [],
  type: ''
};

export default MessageBar;
