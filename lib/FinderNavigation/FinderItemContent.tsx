import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FinderItemContent({
  className,
  children,
  active,
  hidden,
  isFolder,
  ...rest
}: any) {
  const classNames = cx(`finder-item-content ${className}`, {
    "finder-item-content-hidden": hidden,
    "finder-item-content-folder": isFolder,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="finder-item-content-inner">{children}</div>
    </div>
  );
}

FinderItemContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFolder: PropTypes.bool,
  hidden: PropTypes.bool,
};

FinderItemContent.defaultProps = {
  className: "",
  isFolder: false,
  hidden: false,
};

export default FinderItemContent;
