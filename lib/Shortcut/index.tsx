import React from "react";

export function Shortcut(props: any) {
  return (
    <div className="gui-shortcut">
      <div className={`gui-shortcut__name ${props.styleClass}`}>
        {props.name}
      </div>
      <div className="gui-shortcut__wrapper">
        {React.Children.map(props.children, (child: any, idx: any) => [
          idx > 0 ? <span className="gui-shortcut__plus">+</span> : null,
          child,
        ])}
      </div>
    </div>
  );
}

Shortcut.defaultProps = {
  styleClass: "",
  children: {},
};

export default Shortcut;
