import React from 'react';
import { node, string } from 'prop-types';

const FinderPanelLayoutLeft = ({ children, className }) => (
  <div className={`finder-panel-layout__left ${className}`}>{children}</div>
);

FinderPanelLayoutLeft.propTypes = {
  children: node,
  className: string
};

FinderPanelLayoutLeft.defaultProps = {
  className: ''
};

export default FinderPanelLayoutLeft;
