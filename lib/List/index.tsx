import React from "react";
import cx from "classnames";
import ListHead from "./ListHead";

export function List(props: any) {
  const listClasses = cx("gui-list", {
    "gui-list--bordered-right": props.borderedRight,
    "gui-list--bordered-left": props.borderedLeft,
    "gui-list--bordered": props.bordered,
  });

  return (
    <div className={listClasses} role="list">
      <ListHead title={props.title} action={props.action} />

      {props.subtitle && (
        <div className="gui-list__subtitle">{props.subtitle}</div>
      )}

      <div className="gui-list__body">
        {React.Children.map(props.children, (child: any) => {
          if (child) {
            return (
              <div className="gui-list__row" role="listitem">
                {React.cloneElement(child, {})}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

List.defaultProps = {
  title: null,
  action: null,
  borderedRight: false,
  borderedLeft: false,
  bordered: false,
  subtitle: "",
};

export default List;
