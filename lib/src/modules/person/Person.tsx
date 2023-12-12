import React from "react";
import { Avatar, Icon, TooltipWrapper } from "lib";
import cx from "classnames";
import { TextHighlighter } from "../../../helpers/TextHighlighter";

export function Person({
  name,
  subtitle,
  avatarUrl,
  initials,
  className,
  selected,
  interactive,
  collapse,
  bordered,
  onClick,
  highlightText,
  colour,
  locked,
  lockedTooltipText,
  pending,
}: any) {
  const classes = cx("gui-person", className, {
    "gui-person-selected": selected,
    "gui-person-interactive": interactive,
    "gui-person-collapse": collapse,
    "gui-person-bordered": bordered,
  });

  const WrapperElement = interactive ? "button" : "div";

  const shouldHighlightSubtitle =
    !!highlightText.length && typeof subtitle === "string";

  return (
    <WrapperElement className={classes} onClick={onClick}>
      <Avatar url={avatarUrl} initials={initials} colour={colour} />
      <div className="gui-person-right">
        <div className="gui-person-name">
          {highlightText ? (
            <TextHighlighter highlight={highlightText} text={name} />
          ) : (
            name
          )}
        </div>
        {!!subtitle && (
          <div className="gui-person-subtitle">
            {pending && (
              <>
                <span className="gui-person-pending">Pending</span> •{" "}
              </>
            )}
            {shouldHighlightSubtitle ? (
              <TextHighlighter highlight={highlightText} text={subtitle} />
            ) : (
              subtitle
            )}
          </div>
        )}
      </div>
      {selected && !locked && (
        <Icon
          className="gui-person-tick"
          name="tick16"
          types={["primary-blue"]}
        />
      )}
      {locked && (
        <TooltipWrapper
          id={`${avatarUrl}-initials-locked`}
          tooltipText={lockedTooltipText}
        >
          <Icon
            name="lock"
            className="gui-person-lock"
            types={["neutral-20"]}
            defaultActiveColor={false}
          />
        </TooltipWrapper>
      )}
    </WrapperElement>
  );
}

Person.defaultProps = {
  interactive: false,
  highlightText: "",
  locked: false,
  lockedTooltipText: "",
  pending: false,
};
