import React from "react";
import cx from "classnames";
import ListHead from "./ListHead";

export function List(props: any) {
  const listClasses = cx("list", {
    "list--bordered-right": props.borderedRight,
    "list--bordered-left": props.borderedLeft,
    "list--bordered": props.bordered,
  });

  return (
    <div className={listClasses} role="list">
      <ListHead title={props.title} action={props.action} />

      {props.subtitle && <div className="list__subtitle">{props.subtitle}</div>}

      <div className="list__body">
        {React.Children.map(props.children, (child: any) => {
          if (child) {
            return (
              <div className="list__row" role="listitem">
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
