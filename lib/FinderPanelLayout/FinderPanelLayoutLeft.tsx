import React from 'react';
import { node, string, shape } from 'prop-types';

const FinderPanelLayoutLeft = ({
  children,
  className,
  style
}: any) => (
  <div className={`finder-panel-layout__left ${className}`} style={style}>
    {children}
  </div>
);

FinderPanelLayoutLeft.propTypes = {
  children: node.isRequired,
  className: string,
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  style: shape()
};

FinderPanelLayoutLeft.defaultProps = {
  className: '',
  style: {}
};

export default FinderPanelLayoutLeft;
