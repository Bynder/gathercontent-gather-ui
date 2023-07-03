import React, { useContext } from "react";
import { node, string } from "prop-types";
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

FinderPanelLayoutLeftContent.propTypes = {
  children: node.isRequired,
  className: string,
};

FinderPanelLayoutLeftContent.defaultProps = {
  className: "",
};

export default FinderPanelLayoutLeftContent;
