import React from 'react';
import { node, string, shape } from 'prop-types';

const FinderPanelLayoutLeft = ({ children, className, style }) => (
  <div className={`finder-panel-layout__left ${className}`} style={style}>
    {children}
  </div>
);

FinderPanelLayoutLeft.propTypes = {
  children: node.isRequired,
  className: string,
  style: shape()
};

FinderPanelLayoutLeft.defaultProps = {
  className: '',
  style: {}
};

export default FinderPanelLayoutLeft;
