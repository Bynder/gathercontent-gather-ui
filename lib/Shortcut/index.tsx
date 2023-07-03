import React from "react";
import PropTypes from "prop-types";

export function Shortcut(props: any) {
  return <div className="shortcut">
    <div className={`shortcut__name ${props.styleClass}`}>{props.name}</div>
    <div className="shortcut__wrapper">
      {React.Children.map(props.children, (child: any, idx: any) => [
        idx > 0 ? <span className="shortcut__plus">+</span> : null,
        child,
      ])}
    </div>
  </div>
}

Shortcut.propTypes = {
  name: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Shortcut.defaultProps = {
  styleClass: "",
  children: {},
};

export default Shortcut;
