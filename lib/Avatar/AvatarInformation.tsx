import React from "react";

export function AvatarInformation(props: any) {
  return (
    <div className={`gui-avatar__information ${props.className}`}>
      {props.name && <span className="gui-avatar__name">{props.name}</span>}

      {props.email && (
        <span className="gui-avatar__email" title={props.email}>
          {props.isPendingUser && (
            <>
              <span className="gui-avatar__pending">Pending</span> •{" "}
            </>
          )}
          {props.email}
        </span>
      )}
      {props.actions && (
        <span className="gui-avatar__actions">{props.actions}</span>
      )}
    </div>
  );
}

AvatarInformation.defaultProps = {
  className: "",
  name: "",
  email: "",
  actions: null,
  isPendingUser: false,
};

export default AvatarInformation;
