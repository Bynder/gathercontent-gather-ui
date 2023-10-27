import React from "react";

function FinderPanelLayoutRight({ children, className }: any) {
  return (
    <div className={`gui-finder-panel-layout__right ${className}`}>
      {children}
    </div>
  );
}

FinderPanelLayoutRight.defaultProps = {
  className: "",
};

export default FinderPanelLayoutRight;
