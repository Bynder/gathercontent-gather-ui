import React from 'react';
import { node, string } from 'prop-types';

const FinderPanelLayoutHeader = ({ children, className }) => (
  <div className={`finder-panel-layout__left-head ${className}`}>
    {children}
  </div>
);

FinderPanelLayoutHeader.propTypes = {
  children: node.isRequired,
  className: string
};

FinderPanelLayoutHeader.defaultProps = {
  className: ''
};

export default FinderPanelLayoutHeader;
