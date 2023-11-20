import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import TooltipWrapper from "../TooltipWrapper";

export function StatusIndicator({
  className,
  approved,
  completed,
  circleLarge,
  showDescription,
  collapsed,
  bordered,
  small,
  medium,
  softLabel,
  readOnly,
  row,
  color,
  preText,
  label,
  actions,
  description,
  children,
  labelFontSize,
  ...rest
}: any) {
  const classNames = cx(className, {
    "gui-status-indicator": true,
    "gui-status-indicator--completed": completed,
    "gui-status-indicator--collapsed": collapsed,
    "gui-status-indicator--bordered": bordered,
    "gui-status-indicator--small": small,
    "gui-status-indicator--medium": medium,
    "gui-status-indicator--soft-label": softLabel,
    "gui-status-indicator--read-only": readOnly,
    "gui-status-indicator--row": row,
  });

  const circleClassNames = cx("gui-status-indicator__circle", {
    "gui-status-indicator__circle--large": circleLarge || approved,
  });

  const style = completed ? {} : { backgroundColor: color };

  return (
    <div className={classNames} {...rest}>
      <div className="gui-status-indicator__label-row">
        {preText && (
          <span className="gui-status-indicator__pre-text">{preText}</span>
        )}

        <span className={circleClassNames} style={style}>
          {approved && (
            <Icon
              name="boldTickSmall"
              types={["white"]}
              defaultActiveColor={false}
            />
          )}
        </span>

        {label && (
          <div className="gui-status-indicator__label-wrapper">
            <h3 className="gui-status-indicator__label" title={label}>
              <span
                className={`gui-status-indicator__label-text gui-typo-size-${labelFontSize}`}
              >
                {label}
              </span>
            </h3>

            {readOnly && (
              <TooltipWrapper id={label} tooltipText="Read only">
                <Icon
                  name="lock"
                  className="gui-status-indicator__readonly"
                  defaultActiveColor={false}
                />
              </TooltipWrapper>
            )}
          </div>
        )}

        {actions && (
          <span className="gui-status-indicator__actions">{actions}</span>
        )}
      </div>

      {showDescription && (
        <p className="gui-status-indicator__description">{description}</p>
      )}

      {children && (
        <div className="gui-status-indicator__children">{children}</div>
      )}
    </div>
  );
}

StatusIndicator.defaultProps = {
  className: "",
  children: null,
  actions: null,
  color: "#fff",
  label: "",
  completed: false,
  showDescription: false,
  collapsed: false,
  bordered: false,
  small: false,
  medium: false,
  softLabel: false,
  description: "",
  preText: "",
  readOnly: false,
  approved: false,
  circleLarge: false,
  row: false,
  labelFontSize: "base",
};

export default StatusIndicator;
