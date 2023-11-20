import React from "react";
import FinderPanelLayoutProvider from "./FinderPanelLayoutProvider";
import FinderPanelLayoutLeft from "./FinderPanelLayoutLeft";
import FinderPanelLayoutRight from "./FinderPanelLayoutRight";
import FinderPanelLayoutHeader from "./FinderPanelLayoutHeader";
import FinderPanelLayoutLeftContent from "./FinderPanelLayoutLeftContent";

export const FinderPanelLayoutContext = React.createContext({});

export function FinderPanelLayout({ children, className, fixed }: any) {
  return (
    <FinderPanelLayoutProvider fixed={fixed}>
      <div className={`gui-finder-panel-layout ${className}`}>{children}</div>
    </FinderPanelLayoutProvider>
  );
}

FinderPanelLayout.Left = FinderPanelLayoutLeft;

FinderPanelLayout.Right = FinderPanelLayoutRight;

FinderPanelLayout.Header = FinderPanelLayoutHeader;

FinderPanelLayout.LeftContent = FinderPanelLayoutLeftContent;

FinderPanelLayout.defaultProps = {
  className: "",
  fixed: false,
};

export default FinderPanelLayout;
