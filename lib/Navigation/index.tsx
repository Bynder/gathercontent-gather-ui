import React from "react";
import cx from "classnames";

export function Navigation(props: any) {
  const classes = cx(`gui-navigation ${props.className}`, {
    "gui-navigation--tabs": props.tabs,
  });

  return (
    <nav className={classes}>
      {React.Children.map(props.children, (child: any) => {
        if (child?.props) {
          const itemClasses = cx(
            "gui-navigation__item",
            child.props.className || "",
            {
              "gui-navigation__item--active": child.props.active,
            }
          );

          const newProps = {
            className: itemClasses,
          };

          return React.cloneElement(child, newProps);
        }
        return null;
      })}
    </nav>
  );
}

Navigation.defaultProps = {
  tabs: false,
  className: "",
};

export default Navigation;
