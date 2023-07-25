import React, { HTMLAttributes } from "react";
import { StatusIndicatorCircle } from "../statusIndicatorCircle/statusIndicatorCircle";
import Icon from "../../../Icon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  oldStatusColour?: string;
  statusName: string;
  statusColour: string;
}

export function RevisionListStatus({
  oldStatusColour,
  statusName,
  statusColour,
  className = "",
  ...rest
}: Props) {
  return (
    <div className={`${className} revision-list-status`} {...rest}>
      {!!oldStatusColour && (
        <div className="revision-list-old-status mr-2">
          <StatusIndicatorCircle
            color={oldStatusColour}
            solid
            className="mr-2"
          />
          <Icon name="arrowRight16" />
        </div>
      )}
      <div className="revision-list-current-status">
        <StatusIndicatorCircle color={statusColour} solid className="mr-2" />
        <span className="revision-list-status-name">{statusName}</span>
      </div>
    </div>
  );
}
