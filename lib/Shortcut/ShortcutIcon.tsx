import React from "react";
import PropTypes from "prop-types";

export const ShortcutIcon = (props: any) => (
  <span className="shortcut__keyboard">{props.children}</span>
);

ShortcutIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
};

ShortcutIcon.defaultProps = {
  children: [],
};

export default ShortcutIcon;
