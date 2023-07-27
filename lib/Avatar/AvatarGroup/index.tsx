import React from "react";
import { node, number, string, bool } from "prop-types";
import cx from "classnames";
import Dropdown from "../../Dropdown";
import Avatar from "../index";
import AvatarInformation from "../AvatarInformation";

export function AvatarGroup({
  children,
  maximum,
  className,
  small,
  micro,
  noTransform,
  stacked,
}: any) {
  const total = (children && children.length) || 0;
  const plusLabel = `+${total - maximum}`;

  let display = children;
  let remaining = 0;
  let zIndex = children.length;

  if (total > 1) {
    display = children.slice(0, maximum);
    remaining = children.slice(maximum, total);
  }

  const classes = cx(`avatar-group ${className}`, {
    "avatar-group--small": small,
    "avatar-group--micro": micro,
    "avatar-group-stacked": stacked,
  });

  return (
    <div data-component="avatar-group" className={classes}>
      {React.Children.map(display, (child: any) => {
        const styles = { zIndex };
        zIndex -= 1;

        return (
          <span className="avatar-group__item" style={styles}>
            {React.cloneElement(child)}
          </span>
        );
      })}

      {total > maximum && (
        <Dropdown id="avatar-group-dropdown" autoPosition>
          <Dropdown.Trigger triggerClassName="avatar-plus-trigger">
            <Avatar initials={plusLabel} />
          </Dropdown.Trigger>
          <Dropdown.Content noTransform={noTransform}>
            {React.Children.map(remaining, (child: any) => (
              <div className="h-margin-bottom-half">
                <Avatar {...child.props}>
                  <AvatarInformation
                    name={child.props.name}
                    email={child.props.email}
                  />
                </Avatar>
              </div>
            ))}
          </Dropdown.Content>
        </Dropdown>
      )}
    </div>
  );
}

AvatarGroup.defaultProps = {
  maximum: 3,
  className: "",
  small: false,
  micro: false,
  stacked: true,
};

AvatarGroup.propTypes = {
  children: node.isRequired,
  maximum: number,
  className: string,
  small: bool,
  micro: bool,
  stacked: bool,
};

export default AvatarGroup;
