import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import cx from 'classnames';

const TopBar = props => {
  const fixedClass = cx({ 'top-bar__wrapper--fixed': props.fixed });
  return (
    <Grid className="top-bar" fluid>
      <div className={`top-bar__wrapper ${fixedClass}`}>
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
  ])
};

TopBar.defaultProps = {
  fixed: false,
  children: []
};

export default TopBar;
