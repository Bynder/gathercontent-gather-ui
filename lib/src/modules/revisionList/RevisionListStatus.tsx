import React, { HTMLAttributes } from "react";
import { StatusIndicatorCircle } from "../statusIndicatorCircle/statusIndicatorCircle";
import Icon from "../../../Icon";
import TooltipWrapper from "../../../TooltipWrapper";

interface Props extends HTMLAttributes<HTMLDivElement> {
  oldStatusColour?: string;
  oldStatusName?: string;
  statusName: string;
  statusColour: string;
}

export function RevisionListStatus({
  oldStatusColour,
  oldStatusName,
  statusName,
  statusColour,
  className = "",
  ...rest
}: Props) {
  return (
    <div className={`${className} revision-list-status`} {...rest}>
      {!!oldStatusColour && !!oldStatusName && (
        <div className="revision-list-old-status mr-2">
          <TooltipWrapper tooltipText={oldStatusName}>
            <StatusIndicatorCircle
              color={oldStatusColour}
              solid
              className="mr-2"
            />
          </TooltipWrapper>

          <Icon
            name="arrowRight16"
            defaultFillColor={false}
            defaultActiveColor={false}
          />
        </div>
      )}
      <div className="revision-list-current-status">
        <TooltipWrapper tooltipText={statusName}>
          <StatusIndicatorCircle color={statusColour} solid className="mr-2" />
          <span className="revision-list-status-name">{statusName}</span>
        </TooltipWrapper>
      </div>
    </div>
  );
}
