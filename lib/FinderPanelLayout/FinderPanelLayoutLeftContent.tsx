import React, { useContext } from "react";
import { FinderPanelLayoutContext } from "./FinderPanelLayoutProvider";

function FinderPanelLayoutLeftContent({ children, className }: any) {
  const { fixed, headerHeight }: any = useContext(FinderPanelLayoutContext);
  const style = fixed
    ? {
        marginTop: headerHeight,
      }
    : {};
  return (
    <div
      className={`finder-panel-layout__left-content ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

FinderPanelLayoutLeftContent.defaultProps = {
  className: "",
};

export default FinderPanelLayoutLeftContent;
