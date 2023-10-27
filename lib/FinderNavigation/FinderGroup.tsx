import React from "react";

function FinderGroup({ className, title, children, meta }: any) {
  return (
    <div className={`gui-finder-group ${className}`}>
      {(title || meta) && (
        <div className="gui-finder-group-heading">
          {title && <span className="gui-finder-group-title">{title}</span>}
          {!!meta && <div className="gui-finder-group-meta">{meta}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

FinderGroup.defaultProps = {
  className: "",
  title: "",
  meta: null,
};

export default FinderGroup;
