import React from "react";

export function AvatarInformation(props: any) {
  return (
    <div className={`avatar__information ${props.className}`}>
      {props.name && <span className="avatar__name">{props.name}</span>}

      {props.email && (
        <span className="avatar__email" title={props.email}>
          {props.email}
        </span>
      )}
      {props.actions && (
        <span className="avatar__actions">{props.actions}</span>
      )}
    </div>
  );
}

AvatarInformation.defaultProps = {
  className: "",
  name: "",
  email: "",
  actions: null,
};

export default AvatarInformation;
