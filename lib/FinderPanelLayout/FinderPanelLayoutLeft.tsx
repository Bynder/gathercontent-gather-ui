import React from "react";

function FinderPanelLayoutLeft({ children, className, style }: any) {
  return (
    <div className={`finder-panel-layout__left ${className}`} style={style}>
      {children}
    </div>
  );
}

FinderPanelLayoutLeft.defaultProps = {
  className: "",
  style: {},
};

export default FinderPanelLayoutLeft;
