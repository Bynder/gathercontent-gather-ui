import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import cx from 'classnames';

const TopBar = props => {
  const wrapperClasses = cx('top-bar__wrapper', {
    'top-bar__wrapper--fixed': props.fixed
  });

  const classes = cx('top-bar', {
    'top-bar--dark': props.useDarkTheme
  });

  return (
    <Grid className={classes} fluid>
      <div className={wrapperClasses}>
        <Row className="top-bar__inner">{props.children}</Row>
      </div>
    </Grid>
  );
};

TopBar.propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  className: PropTypes.string,
  useDarkTheme: PropTypes.bool
};

TopBar.defaultProps = {
  fixed: false,
  useDarkTheme: false,
  children: [],
  className: ''
};

export default TopBar;
