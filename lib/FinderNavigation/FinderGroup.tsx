import React from "react";

function FinderGroup({ className, title, children, meta }: any) {
  return (
    <div className={`finder-group ${className}`}>
      {(title || meta) && (
        <div className="finder-group-heading">
          {title && <span className="finder-group-title">{title}</span>}
          {!!meta && <div className="finder-group-meta">{meta}</div>}
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
