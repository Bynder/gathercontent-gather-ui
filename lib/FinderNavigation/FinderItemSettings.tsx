import React from "react";

function FinderItemSettings({ className, children }: any) {
  return (
    <div className={`gui-finder-item-settings ${className}`}>{children}</div>
  );
}

FinderItemSettings.defaultProps = {
  className: "",
};

export default FinderItemSettings;
