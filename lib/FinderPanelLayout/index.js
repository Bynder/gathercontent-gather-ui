import React from 'react';
import { node, string, bool } from 'prop-types';
import FinderPanelLayoutProvider from './FinderPanelLayoutProvider';
import FinderPanelLayoutLeft from './FinderPanelLayoutLeft';
import FinderPanelLayoutRight from './FinderPanelLayoutRight';
import FinderPanelLayoutHeader from './FinderPanelLayoutHeader';
import FinderPanelLayoutLeftContent from './FinderPanelLayoutLeftContent';

export const FinderPanelLayoutContext = React.createContext({});

const FinderPanelLayout = ({ children, className, fixed }) => {
  return (
    <FinderPanelLayoutProvider fixed={fixed}>
      <div className={`finder-panel-layout ${className}`}>{children}</div>
    </FinderPanelLayoutProvider>
  );
};

FinderPanelLayout.Left = FinderPanelLayoutLeft;

FinderPanelLayout.Right = FinderPanelLayoutRight;

FinderPanelLayout.Header = FinderPanelLayoutHeader;

FinderPanelLayout.LeftContent = FinderPanelLayoutLeftContent;

FinderPanelLayout.propTypes = {
  children: node.isRequired,
  className: string,
  fixed: bool
};

FinderPanelLayout.defaultProps = {
  className: '',
  fixed: false
};

export default FinderPanelLayout;
