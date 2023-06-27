import React from 'react';
import { node, string } from 'prop-types';

const FinderPanelLayoutRight = ({
  children,
  className
}: any) => (
  <div className={`finder-panel-layout__right ${className}`}>{children}</div>
);

FinderPanelLayoutRight.propTypes = {
  children: node.isRequired,
  className: string
};

FinderPanelLayoutRight.defaultProps = {
  className: ''
};

export default FinderPanelLayoutRight;
